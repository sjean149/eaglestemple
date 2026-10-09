
const pool = require("../db");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

const googleController = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential is required.",
      });
    }

    // 1. Verify the credential with Google.
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (
      !payload?.sub ||
      !payload.email ||
      payload.email_verified !== true
    ) {
      return res.status(401).json({
        message: "Google account could not be verified.",
      });
    }

    const googleSub = payload.sub;
    const email = payload.email.toLowerCase();
    const name = payload.name || email;

    // 2. Look for this Google account.
    const existingGoogleUser = await pool.query(
      `SELECT id, name, email, profile_picture
       FROM users
       WHERE google_sub = $1`,
      [googleSub]
    );

    let user;

    if (existingGoogleUser.rows.length > 0) {
      user = existingGoogleUser.rows[0];
    } else {
      // 3. Do not automatically link an existing email account.
      const existingEmail = await pool.query(
        `SELECT id
         FROM users
         WHERE LOWER(email) = $1`,
        [email]
      );

      if (existingEmail.rows.length > 0) {
        return res.status(409).json({
          message:
            "An account with this email already exists. Sign in with your existing method before linking Google.",
        });
      }

      // 4. Create a Google-authenticated user.
      const result = await pool.query(
        `INSERT INTO users (
          name,
          email,
          password_hash,
          google_sub,
          profile_picture
        )
        VALUES ($1, $2, NULL, $3, $4)
        RETURNING id, name, email, profile_picture`,
        [
          name,
          email,
          googleSub,
          payload.picture || null,
        ]
      );

      user = result.rows[0];
    }

    // 5. Issue your application's own token.
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
        issuer: "eagles-temple",
      }
    );

    return res.status(200).json({
      message: "Google sign-in successful.",
      token,
      user,
    });
  } catch (error) {
    console.error("Google sign-in error:", error);

    return res.status(500).json({
      message: "Unable to complete Google sign-in.",
    });
  }
};

module.exports = googleController;
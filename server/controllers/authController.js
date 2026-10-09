const pool = require("../db");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      confirmPassword
    } = req.body;

    // -----------------------------
    // REQUIRED FIELDS
    // -----------------------------

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required."
      });
    }

    // -----------------------------
    // NAME VALIDATION
    // -----------------------------

    //no numbers regex
    const namePattern = /^[^\d]*$/;
    if (name.trim().length < 3) {
      return res.status(400).json({
        message: "Name must be at least 3 characters."
      });
    } else if (!namePattern.test(name)){
      return res.status(400).json({
        message: "Name cannot contain numbers."
      })
    }

    // -----------------------------
    // EMAIL VALIDATION
    // -----------------------------

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address."
      });
    }

    // -----------------------------
    // PHONE VALIDATION
    // Phone is optional
    
    const phoneRegex =
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (phone && !phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Enter a valid phone number."
      });
    }

    // -----------------------------
    // PASSWORD VALIDATION
    // -----------------------------

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters.",
      });
    }

    if (!passwordPattern.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
      });
    }

    // -----------------------------
    // CONFIRM PASSWORD
    // -----------------------------
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match."
      });
    }

    // -----------------------------
    // CHECK EXISTING USER
    // -----------------------------

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email.toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        message: "An account with this email already exists."
      });
    }

    // -----------------------------
    // HASH PASSWORD
    // -----------------------------

    const passwordHash = await bcrypt.hash(password, 10);

    // -----------------------------
    // CREATE USER
    // -----------------------------

    const result = await pool.query(
      `INSERT INTO users
        (name, email, password_hash, phone_number)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, email, phone_number, created_at`,
      [
        name.trim(),
        email.toLowerCase(),
        passwordHash,
        phone || null
      ]
    );

    // -----------------------------
    // SUCCESS RESPONSE
    // -----------------------------

    return res.status(201).json({
      message: "Account created successfully.",
      user: result.rows[0]
    });

  } catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Server error. Please try again."
    });
  }
};

module.exports = registerUser;
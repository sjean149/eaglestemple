import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GOOGLE_CLIENT_ID =
  "513128025737-dkg36uq5u8vj773qvjb1hl9q0r005ne3.apps.googleusercontent.com";

const GoogleSignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const renderGoogleButton = () => {
      if (!window.google) {
        return;
      }

      const googleButton = document.getElementById("google-button");

      if (!googleButton) {
        return;
      }

      // Prevent the button from being rendered more than once
      googleButton.innerHTML = "";

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,

        callback: async (response) => {
          try {
            console.log("Google response:", response);

            const googleToken = response.credential;

            const res = await fetch(
              "http://localhost:5000/api/auth/google",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  credential: googleToken,
                }),
              }
            );

            const data = await res.json();

            if (!res.ok) {
              throw new Error(
                data.message || "Google Sign-In failed"
              );
            }

            console.log("Logged in user:", data.user);

            // Successful login
            navigate("/");
          } catch (error) {
            console.error("Google Sign-In error:", error);
          }
        },
      });

      window.google.accounts.id.renderButton(googleButton, {
        theme: "outline",
        size: "large",
        shape: "pill",
        text: "signin_with",
        logo_alignment: "left",
      });
    };

    // Google has already loaded
    if (window.google) {
      renderGoogleButton();
    } else {
      // Wait for Google's script to load
      const checkGoogle = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogle);
          renderGoogleButton();
        }
      }, 100);

      // Cleanup
      return () => clearInterval(checkGoogle);
    }
  }, [navigate]);

  return (
    <div className="googleSignIn">
      <div className="or-divider">
        <span>OR</span>
      </div>

      <div id="google-button"></div>
    </div>
  );
};

export default GoogleSignIn;

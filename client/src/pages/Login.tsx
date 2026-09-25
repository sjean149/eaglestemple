import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);

      console.log("Logged in user:", data.user);

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      alert("Unable to connect to the server.");
    }
  };

  return (
    <div className="login-page">
      {/* Eagle GIF background */}
      <iframe
        src="https://giphy.com/embed/QWGuOFoq82eGx34Zhd"
        className="login-background"
        frameBorder="0"
        allowFullScreen
        title="Eagle background"
      ></iframe>

      {/* Dark overlay */}
      <div className="login-overlay"></div>

      {/* Login card */}
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p className="login-subtitle">Sign in to your Eagles Temple account</p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="login-entry">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="login-entry">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">Log In</button>
        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <button type="button" onClick={() => navigate("/register")}>
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

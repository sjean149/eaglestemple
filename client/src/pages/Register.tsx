import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  // Updates React state whenever the user types
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          phone: formData.phoneNumber,
        }),
      });

      const data = await response.json();

      // Backend validation error
      if (!response.ok) {
        alert(data.message);
        return;
      }

      // Successful registration
      alert(data.message);

      // Clear the form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      });

      // Go to login page
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);

      alert("Unable to connect to the server.");
    }
  };

  return (
    <div className="register-page">
      // Eagle GIF background 
      <iframe
        src="https://giphy.com/embed/QWGuOFoq82eGx34Zhd"
        className="register-background"
        frameBorder="0"
        allowFullScreen
        title="Eagle background"
      ></iframe>

      {/* Dark overlay */}
      <div className="register-overlay"></div>

      {/* Registration card */}
      <div className="register-card">
        <h1>Create Account</h1>

        <p className="register-subtitle">Create your Eagles Temple account</p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-entry">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="form-entry">
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
          <div className="form-entry">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="4"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-entry">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Re-enter your password"
            />
          </div>

          {/* Phone */}
          <div className="form-entry">
            <label htmlFor="phoneNumber">
              Phone Number <span>(optional)</span>
            </label>

            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="305-555-1234"
            />
          </div>

          {/* Submit */}
          <button type="submit">Create Account</button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <button type="button" onClick={() => navigate("/login")}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;

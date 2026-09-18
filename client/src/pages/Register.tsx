import { useState } from "react";
import "./Register.css";

export default function Register() {
    // Stores everything the user enters into the form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Stores validation errors
    const [errors, setErrors] = useState({});

    // Updates the appropriate form field whenever the user types
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Checks whether the form contains valid information
    const validateForm = () => {
        const newErrors = {};

        // -------------------------
        // NAME VALIDATION
        // -------------------------
        if (formData.name.trim().length < 2) {
            newErrors.name =
                "Name must be at least 2 characters.";
        }

        // -------------------------
        // EMAIL VALIDATION
        // -------------------------
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            newErrors.email =
                "Please enter a valid email address.";
        }

        // -------------------------
        // PASSWORD VALIDATION
        // -------------------------

        if (formData.password.length < 4) {
            newErrors.password =
                "Password must be at least 4 characters.";
        }

        // Password must contain a symbol
        const symbolPattern = /[^A-Za-z0-9]/;

        if (!symbolPattern.test(formData.password)) {
            newErrors.password =
                "Password must contain at least one symbol.";
        }

        // -------------------------
        // CONFIRM PASSWORD
        // -------------------------

        if (
            formData.password !==
            formData.confirmPassword
        ) {
            newErrors.confirmPassword =
                "Passwords do not match.";
        }

        return newErrors;
    };

    // Runs when the user submits the form
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        // Store any validation errors
        setErrors(validationErrors);

        // If there are errors, stop here
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        // Eventually this is where we will
        // send the data to our backend API
        console.log("Registration successful!");
        console.log(formData);
    };

    return (
        <div className="register-page">

            <main className="register-container">

                <div className="register-card">

                    <div className="register-header">
                        <h1>Create an Account</h1>

                        <p>
                            Sign up to get started.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        {/* NAME */}
                        <div className="form-entry">

                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={
                                    errors.name
                                        ? "input-error"
                                        : ""
                                }
                                placeholder="Enter your name"
                            />

                            {errors.name && (
                                <p className="error-message">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* EMAIL */}
                        <div className="form-entry">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={
                                    errors.email
                                        ? "input-error"
                                        : ""
                                }
                                placeholder="Enter your email"
                            />

                            {errors.email && (
                                <p className="error-message">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* PASSWORD */}
                        <div className="form-entry">

                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={
                                    errors.password
                                        ? "input-error"
                                        : ""
                                }
                                placeholder="Enter your password"
                            />

                            <small className="password-help">
                                Minimum 4 characters and at least
                                one symbol.
                            </small>

                            {errors.password && (
                                <p className="error-message">
                                    {errors.password}
                                </p>
                            )}

                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div className="form-entry">

                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={
                                    errors.confirmPassword
                                        ? "input-error"
                                        : ""
                                }
                                placeholder="Confirm your password"
                            />

                            {errors.confirmPassword && (
                                <p className="error-message">
                                    ⚠ {errors.confirmPassword}
                                </p>
                            )}

                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="register-button"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* LOGIN LINK */}
                    <div className="login-section">
                        <p>
                            Already have an account?{" "}
                            <a href="/login">
                                Log In
                            </a>
                        </p>
                    </div>

                </div>

            </main>

        </div>
    );
}
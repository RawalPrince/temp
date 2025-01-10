import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Signup() {
  const navigate = useNavigate();

  const [password, setPassword] = useState(""); // Manage password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Manage confirm password state
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Toggle confirm password visibility

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup successful");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="form-box">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
      <div className="input-group">
          <label>Name</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <div className="password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
      <div className="toggle-btn">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={() => navigate("/")}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;

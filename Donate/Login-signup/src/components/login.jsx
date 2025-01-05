import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Login() {
  const navigate = useNavigate();
  
  const [password, setPassword] = useState(""); // Manage password state
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login successful");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <div className="toggle-btn">
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={() => navigate("/signup")}>Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

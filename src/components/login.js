import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flashMessage, setFlashMessage] = useState("");

  const userLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        }
      );

      console.log("Login response:", response);

      // Check if login was successful
      if (response.status === 200) {
        // If successful, set the flash message
        setFlashMessage("Login successful!");

        // Optionally, fetch data or perform other actions
        fetchDataAfterLogin();
      }
    } catch (err) {
      console.error("Error making Login request:", err.message);
      setFlashMessage("Login failed. Please try again.");
    }
  };

  const fetchDataAfterLogin = async () => {
    try {
      // Make a GET request after successful login
      const getDataResponse = await axios.get(
        "http://localhost:3000/api/user/"
      );
      setEmail("");
      setPassword("");
      console.log("Data after login:", getDataResponse.data);

      // Handle the data received after login here
    } catch (err) {
      console.error("Error fetching data after login:", err.message);
    }
  };

  const handleInputChange = (event, updateFunction) => {
    updateFunction(event.target.value);
  };

  return (
    <div className="login-form-wrapper">
      <label>Login Here </label>
      <form>
        <div className="login-input-form">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => handleInputChange(e, setEmail)}
            value={email}
          />
        </div>
        <div className="login-input-form">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => handleInputChange(e, setPassword)}
            value={password}
          />
        </div>

        <button id="login-button" type="button" onClick={userLogin}>
          Login
        </button>

        {flashMessage && <div className="flash-message">{flashMessage}</div>}
      </form>
    </div>
  );
}

export default Login;

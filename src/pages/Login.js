import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props) {
    let [userID, setUserID] = useState("");
    let [password, setPassword] = useState("");
    let [loggedIn, setLoggedIn] = useState(false);
    let navigate = useNavigate()
    let handleLogin = () => {
      if (userID === "admin" && password === "1234") {
        setLoggedIn(true);
        navigate('/main');
      }
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="userID">UserID</label>
          <input
            type="text"
            id="userID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button> 
      </form>
      {loggedIn && <p>You are logged in!</p>}
    </div>
  );
}

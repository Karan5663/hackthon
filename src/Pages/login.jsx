import React from 'react';
import './Login.css'; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Sign In</button>
      </div>
    </div>
  );
}

export default Login;

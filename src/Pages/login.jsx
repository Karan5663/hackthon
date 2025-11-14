import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { login } from '../services/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please fill the email field");
    }

    if (!password) {
      return toast.error("Please fill the password field");
    }

    try {
      const response = await login(email, password);

      if (response.success === 'success') {
        toast.success("Login Successful");
        localStorage.setItem('token', response.data.token);
        navigate('/Home');
      } else {
        toast.error(response.error || "Invalid credentials");
      }

    } catch (error) {
      console.log("Exception:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>

        <div className="mb-3">
          Don't have an account yet? <Link to="/register">Register here</Link>
        </div>

        <button onClick={handleSubmit} type="submit">Sign In</button>
      </div>
    </div>
  );
}

export default Login;

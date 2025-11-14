import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">Movie Reviews</span>
        <Link to="/allMovie">All Movies</Link>
        <Link to="/myreviews">My Reviews</Link>
        <Link to="/shareReview">Shared With Me</Link>
        <Link to="/allReview">All Reviews</Link>
      </div>
      <div className="navbar-right">
        <Link to="/editProfile">Edit Profile</Link>
        <Link to="/changePassword">Change Password</Link>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/home">Movie Review</Link>
      <Link to="/my-reviews">My Reviews</Link>
      <Link to="/shared">Shared With Me</Link>
      <Link to="/all-reviews">All Reviews</Link>
      <Link to="/profile">My Profile</Link>
      <Link to="/change-password">Change Password</Link>
      <button onClick={() => navigate("/login")}>Logout</button>
    </nav>
  );
}

export default Navbar;

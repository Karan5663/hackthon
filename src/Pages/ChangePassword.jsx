import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChangePassword.css";

function ChangePassword() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    alert("Password changed successfully!");
    navigate("/");
  };

  return (
    <div className="password-container">
      <div className="password-box">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit} className="password-form">

          <label>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="button-group">
            <button className="btn btn-primary" type="submit">
              Change Password
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ChangePassword;

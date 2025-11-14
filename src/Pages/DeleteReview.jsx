import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DeleteReview.css";

function DeleteReview() {
  const navigate = useNavigate();
  const location = useLocation();

  const review = location.state; // passed from MyReviews page

  const handleDelete = () => {
    // Here you would call API or update state to delete the review
    alert(`Review for "${review.movie}" has been deleted!`);
    navigate("/");
  };

  return (
    <div className="delete-container">
      <div className="delete-box">
        <h2>Delete Review</h2>
        <p>Are you sure you want to delete the review for <strong>{review?.movie}</strong>?</p>
        <div className="button-group">
          <button className="btn btn-danger" onClick={handleDelete}>
            Yes, Delete
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteReview;

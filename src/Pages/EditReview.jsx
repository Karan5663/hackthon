import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function EditReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const isNew = location.state?.isNew;
  const existingReview = location.state;

  const [movie, setMovie] = useState(existingReview?.movie || "");
  const [rating, setRating] = useState(existingReview?.rating || 1);
  const [comment, setComment] = useState(existingReview?.comment || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNew) {
      alert("New Review Added!");
    } else {
      alert("Review Updated!");
    }

    navigate("/");
  };

  return (
    <div className="edit-container">
      <h2>{isNew ? "Add Review" : "Edit Review"}</h2>

      <form onSubmit={handleSubmit} className="edit-form">

        <label>Movie Name</label>
        <input
          type="text"
          value={movie}
          required
        />

        <label>Rating (1 to 5)</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />

        <label>Review</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button className="btn btn-primary" type="submit">
          {isNew ? "Add Review" : "Save Changes"}
        </button>

        <button 
          className="btn btn-secondary"
          onClick={() => navigate("/")}
          type="button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditReview;

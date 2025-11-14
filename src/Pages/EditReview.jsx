import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./EditReview.css";

function EditReview() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isNew, movie: m, rating: r, comment: c } = location.state || {};

  const [movie, setMovie] = useState(m || "");
  const [rating, setRating] = useState(r || 1);
  const [comment, setComment] = useState(c || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNew) {
      toast.success("New Review Added!", { autoClose: 1500 });
    } else {
      toast.info("Review Updated!", { autoClose: 1500 });
    }

    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="edit-container">
      <h2>{isNew ? "Add Review" : "Edit Review"}</h2>

      <form onSubmit={handleSubmit} className="edit-form">
        
        <label>Movie Name</label>
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
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
          type="button"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditReview;

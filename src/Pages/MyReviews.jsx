import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyReviews.css";

function MyReviews() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    { id: 1, movie: "Inception", rating: 5, comment: "Amazing movie!" },
    { id: 2, movie: "Avengers: Endgame", rating: 4, comment: "Great conclusion." },
  ]);

  const handleEdit = (review) => {
    navigate(`/edit/${review.id}`, { state: review });
  };

  const handleAdd = () => {
    navigate("/edit", { state: { isNew: true } });
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="myreviews-container">

      {/* ADD BUTTON */}
      <button 
        className="btn btn-primary add-btn" 
        onClick={handleAdd}
      >
        + Add Review
      </button>

      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <h3>{review.movie}</h3>
            <p><strong>Rating:</strong> {review.rating}/5</p>
            <p>{review.comment}</p>

            <div className="card-actions">
              <button className="btn btn-primary" onClick={() => handleEdit(review)}>
                Edit
              </button>

              <button className="btn btn-danger" onClick={() => handleDelete(review.id)}>
                Delete
              </button>

              <button className="btn btn-success">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyReviews;

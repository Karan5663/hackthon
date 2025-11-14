import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllReview.css";

function AllReview() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    { id: 1, movie: "Inception", rating: 5, comment: "Amazing movie!" },
    { id: 2, movie: "Avengers: Endgame", rating: 4, comment: "Great conclusion." },
    { id: 3, movie: "Interstellar", rating: 5, comment: "Mind-blowing visuals!" },
    { id: 4, movie: "The Dark Knight", rating: 5, comment: "Best Batman ever!" },
  ]);

  const handleEdit = (review) => {
    navigate(`/edit/${review.id}`, { state: review });
  };

  const handleDelete = (review) => {
    navigate("/delete", { state: review });
  };

  const handleShare = (review) => {
    navigate("/share", { state: { reviews } }); // pass all reviews
  };

  return (
    <div className="allreviews-container">
      <h2>All Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-item" key={review.id}>
            <div className="review-details">
              <h3>{review.movie}</h3>
              <p><strong>Rating:</strong> {review.rating}/5</p>
              <p>{review.comment}</p>
            </div>

            <div className="review-actions">
              <button className="btn btn-primary" onClick={() => handleEdit(review)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(review)}>
                Delete
              </button>
              <button className="btn btn-success" onClick={() => handleShare(review)}>
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllReview;

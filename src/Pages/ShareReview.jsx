import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ShareReview.css";

function ShareReview() {
  const navigate = useNavigate();
  const location = useLocation();

  // Example list of reviews (replace with actual reviews from backend or context)
  const reviewsList = location.state?.reviews || [
    { id: 1, movie: "Inception", rating: 5, comment: "Amazing movie!" },
    { id: 2, movie: "Avengers: Endgame", rating: 4, comment: "Great conclusion." },
    { id: 3, movie: "Interstellar", rating: 5, comment: "Mind-blowing visuals!" },
  ];

  const users = ["Alice", "Bob", "Charlie", "David"];

  const [selectedReviewId, setSelectedReviewId] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const selectedReview = reviewsList.find(r => r.id.toString() === selectedReviewId);

  const handleShare = () => {
    if (!selectedReview) {
      alert("Please select a review to share!");
      return;
    }
    if (!selectedUser) {
      alert("Please select a user to share the review with!");
      return;
    }
    alert(`Review for "${selectedReview.movie}" shared with ${selectedUser}!`);
    navigate("/");
  };

  return (
    <div className="share-container">
      <div className="share-box">
        <h2>Share Review</h2>

        {!selectedReview && (
          <>
            <label>Select Review to Share</label>
            <select
              value={selectedReviewId}
              onChange={(e) => setSelectedReviewId(e.target.value)}
            >
              <option value="">-- Select Review --</option>
              {reviewsList.map((review) => (
                <option key={review.id} value={review.id}>
                  {review.movie}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedReview && (
          <>
            <div className="review-content">
              <p><strong>Movie:</strong> {selectedReview.movie}</p>
              <p><strong>Rating:</strong> {selectedReview.rating}/5</p>
              <p><strong>Comment:</strong> {selectedReview.comment}</p>
            </div>

            <label>Select User to Share With</label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              required
            >
              <option value="">-- Select User --</option>
              {users.map((user, index) => (
                <option key={index} value={user}>{user}</option>
              ))}
            </select>
          </>
        )}

        <div className="button-group">
          <button className="btn btn-primary" onClick={handleShare}>
            Share Review
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareReview;

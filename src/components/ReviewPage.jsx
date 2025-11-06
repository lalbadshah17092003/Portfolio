import React, { useState } from "react";
import "./ReviewPage.css";

export default function ReviewPage() {
  const [review, setReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      rating: 5,
      comment: "Amazing experience! Everything was well planned.",
      date: "Oct 2025",
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: 4,
      comment: "Loved the service and destinations. Could improve timing a bit.",
      date: "Sep 2025",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleRating = (value) => {
    setReview({ ...review, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review.name || !review.comment || review.rating === 0) {
      alert("Please fill all fields and select a rating.");
      return;
    }
    const newReview = {
      id: reviews.length + 1,
      ...review,
      date: new Date().toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      }),
    };
    setReviews([newReview, ...reviews]);
    setReview({ name: "", rating: 0, comment: "" });
    alert("Thank you for your feedback!");
  };

  return (
    <section className="review-section">
      <div className="review-container">
        <h2>Traveler Reviews</h2>
        <p>Share your experience and help others plan their perfect trip!</p>

        {/* Review Form */}
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={review.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className={`star ${num <= review.rating ? "active" : ""}`}
                  onClick={() => handleRating(num)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Comment</label>
            <textarea
              name="comment"
              placeholder="Write about your travel experience..."
              value={review.comment}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button type="submit" className="review-btn">
            Submit Review
          </button>
        </form>

        {/* All Reviews */}
        <div className="reviews-list">
          {reviews.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="review-header">
                <h3>{r.name}</h3>
                <p className="review-date">{r.date}</p>
              </div>
              <div className="review-rating">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
              <p className="review-comment">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import './Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const handleReviewChange = (event) => {
    setNewReview(event.target.value);
  };

  const handleSubmitReview = () => {
    if (newReview) {
      setReviews([...reviews, newReview]);
      setNewReview('');
      alert('Thank you for your review!');
    }
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <textarea value={newReview} onChange={handleReviewChange} placeholder="Write your review here..." />
      <button onClick={handleSubmitReview}>Submit Review</button>
    </div>
  );
}

export default Reviews;

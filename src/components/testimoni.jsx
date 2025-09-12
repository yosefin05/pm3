import React from 'react';

const Testimoni = ({ nama, isi, rating }) => {
  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          {i <= rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <h3>{nama}</h3>
        <div className="testimonial-rating">
          {renderRating()}
        </div>
      </div>
      <div className="testimonial-body">
        <p>"{isi}"</p>
      </div>
    </div>
  );
};

export default Testimoni;
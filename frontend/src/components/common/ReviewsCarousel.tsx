import React, { useState, useEffect } from "react";

interface Review {
  author: string;
  stars: number;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({
  reviews,
}) => {
  const [currentIndex, setCurrentIndex] = useState(10);

  // Duplicate reviews to create infinite scrolling effect
  const extendedReviews = [
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % extendedReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + extendedReviews.length) % extendedReviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (stars: number) => {
    return (
      <div style={{ display: "flex" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} style={{ position: "relative" }}>
            <span style={{ color: "#d1d5db", fontSize: "1.25rem" }}>★</span>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                overflow: "hidden",
                width: `${Math.min(Math.max(stars - star + 1, 0), 1) * 100}%`,
                color: "gold",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>★</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedReviews.map((review, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: "100%",
              padding: "1rem",
              backgroundColor: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600" }}>
                {review.author}
              </h3>
              {renderStars(review.stars)}
            </div>
            <p style={{ color: "#4b5563" }}>{review.text}</p>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        &#8250;
      </button>
    </div>
  );
};

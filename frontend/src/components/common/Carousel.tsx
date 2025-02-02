import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  images = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = (image: string) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 20}%)`,
          padding: "0px 20px",
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ flexShrink: 0 }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                height: "300px",
                width: "auto",
                objectFit: "cover",
                cursor: "pointer",
                padding: "0px 20px",
              }}
              onClick={() => openFullscreen(image)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "84px",
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
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "84px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        &#8250;
      </button>
      {fullscreenImage && (
        <div
          onClick={closeFullscreen}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
            }}
          />
        </div>
      )}
    </div>
  );
};

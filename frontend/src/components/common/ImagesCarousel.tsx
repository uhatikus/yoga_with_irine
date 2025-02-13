import React, { useState, useEffect } from "react";
import { useGalleryImages } from "../../hooks/useGalleryImages";
import useIsMobile from "../../hooks/useIsMobile";

export const ImagesCarousel: React.FC = () => {
  const imagePaths = useGalleryImages();
  const isMobile = useIsMobile();

  const [currentIndex, setCurrentIndex] = useState(10);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenImage_i, setFullscreenImage_i] = useState<number | null>(
    null
  );
  const images = [...imagePaths, ...imagePaths];
  const imageslength = images.length !== 0 ? images.length : 60;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imageslength);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imageslength) % imageslength);
  };

  const nextImage = () => {
    setFullscreenImage(images[(fullscreenImage_i! + 1) % imageslength]);
    setFullscreenImage_i((fullscreenImage_i! + 1) % imageslength);
  };

  const prevImage = () => {
    setFullscreenImage(
      images[(fullscreenImage_i! - 1 + imageslength) % imageslength]
    );
    setFullscreenImage_i(
      (fullscreenImage_i! - 1 + imageslength) % imageslength
    );
  };

  const openFullscreen = (image: string, index: number) => {
    setFullscreenImage(image);
    setFullscreenImage_i(index);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setFullscreenImage_i(null);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: isMobile ? "scroll" : "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: isMobile
            ? `translateX(-${currentIndex * 200}px)`
            : `translateX(-${currentIndex * 300}px)`,
          padding: isMobile ? "0px 20px" : "0px 20px",
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ flexShrink: 0 }}>
            <img
              src={image.replace("gallery", "gallery/compressed")}
              alt={`Slide ${index + 1}`}
              style={{
                height: isMobile ? "200px" : "300px",
                width: "auto",
                objectFit: "cover",
                cursor: "pointer",
                padding: "0px 20px",
              }}
              onClick={() => openFullscreen(image, index)}
            />
          </div>
        ))}
      </div>
      {!isMobile && (
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
      )}
      {!isMobile && (
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
      )}
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
      {fullscreenImage && (
        <button
          onClick={prevImage}
          style={{
            position: "fixed",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "84px",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 1001,
            paddingLeft: isMobile ? "0px" : "50px",
          }}
        >
          &#8249;
        </button>
      )}
      {fullscreenImage && (
        <button
          onClick={nextImage}
          style={{
            position: "fixed",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "84px",
            color: "white",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 1001,
            paddingRight: isMobile ? "0px" : "50px",
          }}
        >
          &#8250;
        </button>
      )}
    </div>
  );
};

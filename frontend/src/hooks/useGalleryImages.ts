import { useEffect, useState } from "react";

export function useGalleryImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const initialGalleryImagesNames = [
      "public/assets/images/gallery/IMG_20250206_180235_107.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_226.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_227.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_295.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_368.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_412.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_415.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_435.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_516.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_564.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_578.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_593.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_628.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_640.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_699.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_728.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_783.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_791.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_866.jpg",
      "public/assets/images/gallery/IMG_20250206_180235_903.jpg",
      "public/assets/images/gallery/IMG_20250206_180338_576.jpg",
      "public/assets/images/gallery/IMG_20250206_180419_392.jpg",
      "public/assets/images/gallery/IMG_20250206_180419_457.jpg",
      "public/assets/images/gallery/IMG_20250206_180419_694.jpg",
      "public/assets/images/gallery/IMG_20250206_180501_086.jpg",
      "public/assets/images/gallery/IMG_20250206_180501_341.jpg",
      "public/assets/images/gallery/IMG_20250206_180501_854.jpg",
      "public/assets/images/gallery/IMG_20250208_004536_900.jpg",
      "public/assets/images/gallery/IMG_20250208_004537_181.jpg",
      "public/assets/images/gallery/IMG_20250208_004537_210.jpg",
      "public/assets/images/gallery/IMG_20250208_004537_425.jpg",
      "public/assets/images/gallery/IMG_20250208_004537_448.jpg",
      "public/assets/images/gallery/IMG_20250208_004537_453.jpg",
      "public/assets/images/gallery/IMG_20250208_004537_897.jpg",
      "public/assets/images/gallery/IMG_20250208_004711_407.jpg",
      "public/assets/images/gallery/IMG_20250208_004711_656.jpg",
      "public/assets/images/gallery/IMG_20250208_004711_756.jpg",
      "public/assets/images/gallery/IMG_20250208_004711_978.jpg",
      "public/assets/images/gallery/IMG_20250208_004712_091.jpg",
    ];

    const shuffledPaths = initialGalleryImagesNames
      .map((path) => path.replace("/public", ""))
      .sort(() => Math.random() - 0.5);

    setImages(shuffledPaths);
  }, []);

  return images;
}

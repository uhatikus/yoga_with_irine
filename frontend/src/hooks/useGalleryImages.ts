import { useState, useEffect } from "react";

export function useGalleryImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const importImages = async () => {
      const imageImports = import.meta.glob(
        "/src/images/gallery/*.{jpg,jpeg,png}",
        { eager: true }
      );
      let paths = Object.keys(imageImports).map(
        (path) => path
        //   .replace("/public", "")
      );

      // Fisher-Yates shuffle
      paths = paths.sort(() => Math.random() - 0.5);
      setImages(paths);
    };

    importImages();
  }, []);

  return images;
}

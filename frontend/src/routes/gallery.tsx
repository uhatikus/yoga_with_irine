import { Navbar } from "../components/Navbar";
import styled from "@emotion/styled";
import { createFileRoute } from "@tanstack/react-router";

const GalleryContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <Navbar />
      <GalleryContainer>
        <h2>Yoga Class Photos</h2>
        <PhotoGrid>Image</PhotoGrid>
      </GalleryContainer>
    </>
  );
}

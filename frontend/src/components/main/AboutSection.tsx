import { useGalleryImages } from "../../hooks/useGalleryImages";
import useIsMobile from "../../hooks/useIsMobile";
import { Carousel } from "../common/ImagesCarousel";
// import FAQAccordion from "./FAQ";

const AboutSection = () => {
  const imagePaths = useGalleryImages();

  const isMobile = useIsMobile();
  return (
    <div
      style={{
        minHeight: "1100px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div
        id="about_section"
        style={{
          height: "auto",
          fontSize: isMobile ? "1.5rem" : "2.3rem",
          width: "70%",
          //   fontWeight: "bold",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <p style={{ marginBottom: "20px", textAlign: "center" }}>
          I'm irina Malyants, a certified yoga instructor with over 10 years of
          experience in yoga, and I invite you to join my classes in Barcelona.
          The practice will result in a calm mind, increased body awareness, a
          deeper connection with yourself and the world around you, as well as
          flexibility, and endurance! Yoga classes are held in English and the
          group is international.
        </p>
      </div>
      <div
        style={{
          minHeight: "500px",
          width: "100%",
          padding: "0 60px",
        }}
      >
        {/* <FAQAccordion /> */}
        <Carousel images={imagePaths} />
      </div>
    </div>
  );
};

export default AboutSection;

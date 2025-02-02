import { Carousel } from "../common/ImagesCarousel";

const AboutSection = () => {
  return (
    <div
      style={{
        height: "1100px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          height: "400px",
          fontSize: "4rem",
          fontWeight: "bold",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        I am the best yoga teacher. Now I will explain why
      </h2>
      <div
        style={{
          height: "500px",
          width: "100%",
          padding: "0 60px",
        }}
      >
        <Carousel
          images={[
            "assets/images/YOGA_IN_PARK.jpg",
            "assets/images/YOGA_MAIN.jpg",
            "assets/images/Tibidabo.jpg",
            "assets/images/YOGA_IN_STUDIO.jpg",
            "assets/images/test.jpg",
          ]}
        />
      </div>
    </div>
  );
};

export default AboutSection;

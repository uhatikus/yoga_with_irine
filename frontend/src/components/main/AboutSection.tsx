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
      <div
        id="about_section"
        style={{
          height: "auto",
          fontSize: "2.5rem",
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
        <span style={{ marginBottom: "20px", textAlign: "center" }}>
          I am a certified yoga instructor with over 10 years of experience, and
          I invite you to join my classes in Barcelona. You’ll connect with
          yourself and the world around you, while also improving your physical
          well-being!
        </span>

        <ol style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          <li>
            <strong>Breathing Exercises:</strong> We begin our session with
            breathing exercises to set a calm mood.
          </li>
          <li>
            <strong>Meditation Techniques:</strong> Learning new meditation
            techniques to center the mind.
          </li>
          <li>
            <strong>Asanas:</strong> We move on to a series of asanas targeting
            all muscle groups, combining dynamic movements with static poses,
            always focusing on the breath.
          </li>
          <li>
            <strong>Shavasana:</strong> Ending with our favorite Shavasana —
            deep relaxation.
          </li>
        </ol>
      </div>
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

import { ParallaxSection } from "../common/ParallaxSection";

const BackgroundSections = () => {
  return (
    <ParallaxSection speed={-0.5}>
      {/* Firt background section */}
      <div
        style={{
          backgroundImage: "url(assets/images/YOGA_MAIN_good.jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: "1000px",
          backgroundColor: "white",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "115px 0 -60px 0",
        }}
      ></div>

      {/* Second background section */}
      <div
        style={{
          backgroundImage: "url(assets/images/YOGA_IN_PARK.jpg)",
          width: "100%",
          height: "1500px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "0 0 -500px 0",
        }}
      ></div>
      {/* Third background section */}
      <div
        style={{
          backgroundImage: "url(assets/images/YOGA_IN_STUDIO.jpg)",
          width: "100%",
          height: "1500px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </ParallaxSection>
  );
};

export default BackgroundSections;

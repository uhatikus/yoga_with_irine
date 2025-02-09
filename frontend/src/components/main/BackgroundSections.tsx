import useIsMobile from "../../hooks/useIsMobile";
import { ParallaxSection } from "../common/ParallaxSection";

const BackgroundSections = () => {
  const isMobile = useIsMobile();
  return (
    <ParallaxSection speed={-0.5}>
      {/* Firt background section */}
      <div
        style={{
          backgroundImage: "url(assets/images/YOGA_MAIN_good.jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: isMobile ? "500px" : "1000px",
          backgroundColor: "white",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: isMobile ? "120px 0 70px 0" : "115px 0 -60px 0",
        }}
      ></div>

      {/* Second background section */}
      <div
        style={{
          backgroundImage: "url(assets/images/YOGA_IN_PARK.jpg)",
          width: "100%",
          height: isMobile ? "600px" : "1000px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundPosition: "center bottom",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      ></div>
      {/* Third background section */}
      <div
        style={{
          backgroundImage: "url(assets/images/YOGA_IN_STUDIO.jpg)",
          width: "100%",
          height: "1200px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundPosition: "center",
          // backgroundPosition: "center top",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
      ></div>
    </ParallaxSection>
  );
};

export default BackgroundSections;

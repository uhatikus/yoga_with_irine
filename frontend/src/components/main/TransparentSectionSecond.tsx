import useIsMobile from "../../hooks/useIsMobile";
import { useTranslation } from "../../hooks/useTranslation";

const SecondTransparentSection = () => {
  const isMobile = useIsMobile();
  const t = useTranslation();
  return (
    <div
      style={{
        height: isMobile ? "400px" : "1000px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: isMobile ? "2.5rem" : "4rem",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Open Your Soul to Yourself */}
        {t.transparent.second}
      </h2>
    </div>
  );
};

export default SecondTransparentSection;

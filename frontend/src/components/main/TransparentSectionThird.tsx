import useIsMobile from "../../hooks/useIsMobile";
import { useTranslation } from "../../hooks/useTranslation";

const ThirdTransparentSection = () => {
  const isMobile = useIsMobile();
  const t = useTranslation();
  return (
    <div
      style={{
        height: isMobile ? "500px" : "1000px",
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
        {t.transparent.third}
      </h2>
    </div>
  );
};

export default ThirdTransparentSection;

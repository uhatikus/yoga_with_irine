import useIsMobile from "../../hooks/useIsMobile";
import { useTranslation } from "../../hooks/useTranslation";

const FirstTransparentSection = () => {
  const isMobile = useIsMobile();
  const t = useTranslation();

  return (
    <div
      style={{
        height: isMobile ? "520px" : "950px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
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
        {t.transparent.first}
      </h2>
    </div>
  );
};

export default FirstTransparentSection;

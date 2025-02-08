import { useTranslation } from "../../hooks/useTranslation";

const ThirdTransparentSection = () => {
  const t = useTranslation();
  return (
    <div
      style={{
        height: "1000px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: "4rem",
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

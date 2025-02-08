import { useTranslation } from "../../hooks/useTranslation";

const FirstTransparentSection = () => {
  const t = useTranslation();

  return (
    <div
      style={{
        height: "950px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
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
        {t.transparent.first}
      </h2>
    </div>
  );
};

export default FirstTransparentSection;

import useIsMobile from "../../hooks/useIsMobile";
import { useTranslation } from "../../hooks/useTranslation";
import { ImagesCarousel } from "../common/ImagesCarousel";

const AboutSection = () => {
  const t = useTranslation();
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
      }}
    >
      <div
        id="about_section"
        style={{
          height: "auto",
          fontSize: isMobile ? "24px" : "36px",
          width: "70%",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontFamily: "Helvetica, sans-serif",
        }}
      >
        <blockquote
          style={{
            margin: "50px auto",
            padding: "20px",
            textAlign: "center",
            fontStyle: "italic",
            color: "#333",
            background: "#f7f7ff",
            borderLeft: "4px solid #ccd",
            borderRadius: "8px",
            boxShadow: "2px 4px 10px rgba(0, 0, 20, 0.1)",
          }}
        >
          <p style={{ marginBottom: "10px" }}>{t.about.quote}</p>
          <footer
            style={{
              fontWeight: "bold",
              color: "#555",
              marginTop: "10px",
              textAlign: "right",
              fontSize: isMobile ? "18px" : "24px",
            }}
          >
            {t.about.auther}
          </footer>
        </blockquote>
      </div>
      <div
        style={{
          minHeight: "500px",
          width: "100%",
          padding: "0 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <FAQAccordion /> */}
        <ImagesCarousel />
      </div>
    </div>
  );
};

export default AboutSection;

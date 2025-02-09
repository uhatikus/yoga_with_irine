// import { useGalleryImages } from "../../hooks/useGalleryImages";
// import { Carousel } from "../common/ImagesCarousel";
import useIsMobile from "../../hooks/useIsMobile";
import { ReviewsCarousel } from "../common/ReviewsCarousel";
import FAQAccordion from "./FAQ";

const FooterSection = () => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  // const t = useTranslation();
  return (
    <div
      style={{
        minHeight: "950px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div id="qa_section" style={{ maxWidth: "90%" }}>
        <FAQAccordion />
      </div>
      <div
        id="reviews_section"
        style={{
          minHeight: "300px",
          maxWidth: "90%",
          padding: isMobile ? "0 5px" : "0 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReviewsCarousel />
      </div>
      {/* <Carousel images={imagePaths} /> */}

      {/* <div
        style={{
          minHeight: "100px",
          maxWidth: "90%",
          padding: "0 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}
      <footer
        id="contacts_section"
        style={{
          paddingTop: "100px",
          height: "250px",
          width: "100%",
          textAlign: "center" as const,
          backgroundColor: "#f4f4ff",
          color: "#333",
          fontSize: "14px",
          lineHeight: "1.6",
          // paddingBottom: "auto",
        }}
      >
        <p>
          Thank you for your interest in my yoga classes! <br></br> Hope to see
          you soon!
        </p>
        <p>
          Contact me:{" "}
          <a
            href="https://www.instagram.com/yoga_with_irine"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0077b6",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="https://wa.me/34600259412"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0077b6",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            WhatsApp
          </a>{" "}
          |{" "}
          <a
            href="mailto:irine.malyants@gmail.com"
            style={{
              color: "#0077b6",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Email
          </a>
        </p>
        <p>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/uhatikus"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0077b6",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            uhatikus
          </a>
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#666",
            marginTop: "10px",
          }}
        >
          © {currentYear} Yoga Open Soul
        </p>
      </footer>
      {/* </div> */}
    </div>
  );
};

export default FooterSection;

import useIsMobile from "../../hooks/useIsMobile";
import { ReviewsCarousel } from "../common/ReviewsCarousel";
import FAQAccordion from "../common/FAQ";
import { useTranslation } from "../../hooks/useTranslation";

const FooterSection = () => {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  const t = useTranslation();
  return (
    <div
      style={{
        minHeight: "700px",
        width: "100%",
        backgroundColor: "white",
        // backgroundColor: "#f8f8ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div id="qa_section" style={{ maxWidth: "100%" }}>
        <FAQAccordion />
      </div>
      <div
        id="reviews_section"
        style={{
          minHeight: "300px",
          maxWidth: "90%",
          // padding: isMobile ? "0px" : "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
        }}
      >
        <ReviewsCarousel />
      </div>
      <div
        style={{
          fontSize: "18px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {t.footer.phrase1} <br></br> {t.footer.phrase2}
      </div>
      <footer
        id="contacts_section"
        style={{
          width: "100%",
          textAlign: "center" as const,
          backgroundColor: "#f4f4ff",
          color: "#333",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            opacity: "70%",
          }}
        >
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
            <img
              src="/assets/images/insta.png"
              alt="insta"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "5px",
                marginBlock: "6px",
                // verticalAlign: "middle",
              }}
            />
          </a>
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
            <img
              src="/assets/images/whatsapp.png"
              alt="whatsapp"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "5px",
                marginBlock: "6px",
                // verticalAlign: "middle",
              }}
            />
          </a>
          <a
            href="mailto:irine.malyants@gmail.com"
            style={{
              color: "#0077b6",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            <img
              src="/assets/images/email.png"
              alt="Metro"
              style={{
                width: "38px",
                height: "30px",
                marginRight: "5px",
                marginBlock: "6px",
                // verticalAlign: "middle",
              }}
            />
          </a>
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "#666",
            marginBlock: "10px",
          }}
        >
          © {currentYear} Yoga Open Soul &
          <a
            href="https://www.linkedin.com/in/uhatikus"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0077b6",
              textDecoration: "none",
              margin: "0 5px",
            }}
          >
            uhatikus
          </a>
        </p>
      </footer>
      {/* </div> */}
    </div>
  );
};

export default FooterSection;

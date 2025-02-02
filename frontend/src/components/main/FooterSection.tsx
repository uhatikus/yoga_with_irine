import { ReviewsCarousel } from "../common/ReviewsCarousel";
import FAQAccordion from "./FAQ";

const FooterSection = () => {
  return (
    <div
      style={{
        height: "1200px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "600px",
          width: "600px",
          padding: "0 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FAQAccordion />
        <ReviewsCarousel
          reviews={[
            {
              author: "John Doe",
              stars: 4.3,
              text: "Great product, highly recommended!",
            },
            {
              author: "John Doe",
              stars: 3.8,
              text: "Great product, highly recommended!",
            },
            {
              author: "John Doe",
              stars: 4.6,
              text: "Great product, highly recommended!",
            },
          ]}
        />
      </div>
      <h2
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "black",
          width: "60%",
        }}
      >
        +34 600 228 456
      </h2>
    </div>
  );
};

export default FooterSection;

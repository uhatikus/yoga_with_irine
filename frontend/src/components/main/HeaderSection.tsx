import { useTranslation } from "../../hooks/useTranslation";
import { LanguageSwitcher } from "../translation/LanguageSwitcher";

const HeaderSection = () => {
  const t = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const title: string = "Schedule";
  const section_id: string = "schedule_section";

  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        backgroundColor: "white",
        // opacity: 0.8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Text fontSize="50" color="#3399ff" opacity="50%">
            Yoga Open Soul
          </Text> */}
      <button
        onClick={() => scrollToSection(section_id)}
        style={{
          color: "gray",
          fontWeight: "500",
          transition: "color 0.2s ease-in-out",
          //   "&:hover": {
          //     color: "black",
          //   },
        }}
      >
        {title}
      </button>
      <h2
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#3399ff",
          opacity: "50%",
        }}
      >
        {/* Yoga Open Soul */}
        {/* {language} */}
        {t.nav.about}
      </h2>
      <LanguageSwitcher />
    </div>
  );
};

export default HeaderSection;

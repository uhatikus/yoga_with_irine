import { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageSwitcher } from "../translation/LanguageSwitcher";
import { Menu, X } from "lucide-react";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const t = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false); // Close menu on resize to larger screen
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      {!isMobile && (
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
      )}
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
        {/* {t.nav.about} */}
      </h2>
      <LanguageSwitcher />
      {isMobile && (
        <button
          style={{
            background: "none",
            border: "none",
            color: "black",
            cursor: "pointer",
            padding: "8px",
            minWidth: "20px",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
    </div>
  );
};

export default HeaderSection;

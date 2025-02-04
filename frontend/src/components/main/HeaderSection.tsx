import { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageSwitcher } from "../translation/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
import ButtonWithScroll, { ScrollingSection } from "./ButtonWithScroll";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const t = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCertificateClick = () => {
    const url = "/certificate";
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const sections: ScrollingSection[] = [
    { section_name: "About", section_id: "about_section" },
    { section_name: "Schedule", section_id: "schedule_section" },
    { section_name: "Q&A", section_id: "qa_section" },
    { section_name: "Reviews", section_id: "reviews_section" },
    { section_name: "Contacts", section_id: "contacts_section" },
  ];

  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        justifyContent: "space-between",
        paddingInline: "40px",
      }}
    >
      <div
        style={{
          height: "100px",
          width: "80%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        {!isMobile &&
          sections.map((section) => (
            <ButtonWithScroll key={section.section_id} {...section} />
          ))}
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
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: 0,
            marginTop: "8px",
            width: "200px",
            backgroundColor: "white",
            borderRadius: "6px",
            // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            zIndex: 2000, // Increased z-index
            // border: "1px solid #ddd", // Added border to make it visible
            display: isMenuOpen ? "flex" : "none", // Alternative to conditional rendering
            flexDirection: "column",
          }}
        >
          {sections.map((section) => (
            <ButtonWithScroll key={section.section_id} {...section} />
          ))}
        </div>
      </div>
      <div
        style={{
          height: "100px",
          width: "20%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          paddingLeft: "40px",
        }}
      >
        {!isMobile && (
          <div
            onClick={handleCertificateClick}
            style={{
              cursor: "pointer",
              color: "gray",
              fontWeight: "500",
              transition: "color 0.2s ease-in-out",
              paddingRight: "40px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "black")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
          >
            Certificate
          </div>
        )}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default HeaderSection;

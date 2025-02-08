import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageSwitcher } from "../translation/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import useIsMobile from "../../hooks/useIsMobile";
import ButtonWithScroll, { ScrollingSection } from "./ButtonWithScroll";
import { atom, useRecoilState } from "recoil";

// Define the recoil atom for menu state
export const isMenuOpenState = atom({
  key: "isMenuOpenState",
  default: false,
});

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const [isScreenImage, setIsScreenImage] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();
  const t = useTranslation();

  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   };

  const handleCertificateClick = () => {
    setIsScreenImage(true);
    setIsMenuOpen(false);
    // const url = "/certificate";
    // window.open(url, "_blank");
  };

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const sections: ScrollingSection[] = [
    { section_name: t.header.about, section_id: "about_section" },
    { section_name: t.header.schedule, section_id: "schedule_section" },
    { section_name: t.header.q_and_a, section_id: "qa_section" },
    { section_name: t.header.reviews, section_id: "reviews_section" },
    { section_name: t.header.contacts, section_id: "contacts_section" },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
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
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        )}
        <div
          id="mobile_menu"
          ref={ref}
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            marginTop: "8px",
            width: "270px",
            backgroundColor: "white",
            borderRadius: "6px",
            fontSize: "1.8rem",
            // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            zIndex: 2000, // Increased z-index
            // border: "1px solid #ddd", // Added border to make it visible
            display: isMenuOpen ? "flex" : "none", // Alternative to conditional rendering
            flexDirection: "column",
            paddingLeft: "50px",
            alignItems: "left",
            boxShadow: `-$10px $10px 0 rgba(0, 0, 0, 0.2)`,
          }}
        >
          {sections.map((section) => (
            <ButtonWithScroll key={section.section_id} {...section} />
          ))}
          <div
            onClick={handleCertificateClick}
            style={{
              cursor: "pointer",
              color: "gray",
              fontWeight: "500",
              height: "100px",
              transition: "color 0.2s ease-in-out",
              paddingRight: "40px",
              display: "flex",
              alignItems: "center",
              textAlign: "left",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "black")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
          >
            {t.header.certificate}
          </div>
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
            {t.header.certificate}
          </div>
        )}
        <LanguageSwitcher />
      </div>
      {isScreenImage && (
        <div
          onClick={() => setIsScreenImage(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={
              "assets/images/Certificate_Irina_Malyants_200_Hour_Hatha_Yoga_Teacher.jpg"
            }
            alt="Fullscreen"
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderSection;

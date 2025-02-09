import { useRecoilState } from "recoil";
import { isMenuOpenState } from "./HeaderSection";
import useIsMobile from "../../hooks/useIsMobile";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export interface ScrollingSection {
  section_id: string;
  section_name: string;
}

const ButtonWithScroll: React.FC<ScrollingSection> = (
  section: ScrollingSection
) => {
  const [_, setIsMenuOpen] = useRecoilState(isMenuOpenState);
  const isMobile = useIsMobile();

  return (
    <button
      onClick={() => {
        scrollToSection(section.section_id);
        setIsMenuOpen(false);
      }}
      style={{
        cursor: "pointer",
        color: "gray",
        fontWeight: "500",
        height: isMobile ? "70px" : "100px",
        transition: "color 0.2s ease-in-out",
        paddingRight: "40px",
        textAlign: "left",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "black")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
    >
      {section.section_name}
    </button>
  );
};

export default ButtonWithScroll;

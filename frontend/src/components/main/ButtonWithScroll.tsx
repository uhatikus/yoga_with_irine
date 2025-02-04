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
  return (
    <button
      onClick={() => scrollToSection(section.section_id)}
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
      {section.section_name}
    </button>
  );
};

export default ButtonWithScroll;

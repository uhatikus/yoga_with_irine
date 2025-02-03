const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
// const scrollToSection = (id: string) => {
//   const element = document.getElementById(id);
//   if (!element) return;

//   const targetPosition = element.getBoundingClientRect().top + window.scrollY;
//   const startPosition = window.scrollY;
//   const distance = targetPosition - startPosition;
//   const duration = 1000; // Adjust duration in milliseconds (e.g., 1000ms for 1s scroll)
//   let startTime: number | null = null;

//   const animateScroll = (currentTime: number) => {
//     if (startTime === null) startTime = currentTime;
//     const elapsedTime = currentTime - startTime;
//     const progress = Math.min(elapsedTime / duration, 1);

//     window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

//     if (elapsedTime < duration) {
//       requestAnimationFrame(animateScroll);
//     }
//   };

//   const easeInOutQuad = (t: number) => {
//     return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
//   };

//   requestAnimationFrame(animateScroll);
// };

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

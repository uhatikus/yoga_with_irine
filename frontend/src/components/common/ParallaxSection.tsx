import React from "react";
import { useParallax } from "../../hooks/useParallax";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
}) => {
  const offset = useParallax(speed);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

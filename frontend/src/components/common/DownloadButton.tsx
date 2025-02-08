import React, { FC } from "react";

interface DownloadButtonProps {
  text: string;
  pdfPath: string;
  style?: React.CSSProperties;
}

const DownloadButton: FC<DownloadButtonProps> = ({ text, pdfPath, style }) => {
  const defaultStyle: React.CSSProperties = {
    color: "gray",
    fontWeight: "500",
    transition: "color 0.2s ease-in-out",
    paddingRight: "40px",
    ...style, // Merge user styles with defaults
  };

  return (
    <a
      href={pdfPath}
      download
      style={defaultStyle}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "black")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color =
          defaultStyle.color as string)
      }
    >
      {text}
    </a>
  );
};

export default DownloadButton;

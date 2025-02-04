import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Language } from "../../translations/types";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const flags = {
    en: "🇬🇧",
    es: "🇪🇸",
    ru: "🇷🇺",
  };

  const languages: Language[] = ["en", "es"]; //["en", "es", "ru"];

  const containerStyle = {
    position: "relative" as const,
    width: "fit-content",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
    minWidth: "70px",
    justifyContent: "space-between",
  };

  const dropdownStyle = {
    position: "absolute" as const,
    top: "100%",
    left: "0",
    right: "0",
    marginTop: "4px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: isOpen ? "block" : "none",
    zIndex: 1000,
  };

  const optionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
    textAlign: "left" as const,
  };

  const handleOptionHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#f3f4f6";
  };

  const handleOptionLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "transparent";
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        <span>{flags[language]}</span>
        <span>{language.toUpperCase()}</span>
        {/* <span style={{ fontSize: "0.8em" }}>▼</span> */}
      </button>
      <div style={dropdownStyle}>
        {languages.map((lang) => (
          <button
            key={lang}
            style={optionStyle}
            onClick={() => {
              setLanguage(lang);
              setIsOpen(false);
            }}
            onMouseEnter={handleOptionHover}
            onMouseLeave={handleOptionLeave}
          >
            <span>{flags[lang]}</span>
            <span>{lang.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

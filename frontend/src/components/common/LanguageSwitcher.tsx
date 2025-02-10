import React, { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Language } from "../../translations/types";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const flags = {
    cat: "assets/images/languages/cat.png",
    cn: "assets/images/languages/cn.png",
    de: "assets/images/languages/de.png",
    en: "assets/images/languages/gb.png",
    es: "assets/images/languages/es.png",
    fr: "assets/images/languages/fr.png",
    it: "assets/images/languages/it.png",
    pt: "assets/images/languages/pt.png",
    ru: "assets/images/languages/ru.png",
    ua: "assets/images/languages/ua.png",
  };

  const languages: Language[] = [
    "en",
    "es",
    "cat",
    "it",
    "fr",
    "de",
    "pt",
    "ua",
    "ru",
    "cn",
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const containerStyle = {
    position: "relative" as const,
    width: "fit-content",
    color: "#5D5F5F",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    backgroundColor: "#ffffff",
    // border: "1px solid #e5e7eb",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 500,
    minWidth: "80px",
  };

  const dropdownStyle = {
    position: "absolute" as const,
    top: "100%",
    left: "0",
    right: "0",
    marginTop: "4px",
    backgroundColor: "#ffffff",
    // border: "1px solid #e5e7eb",
    borderRadius: "6px",
    boxShadow: "0 6px 6px rgba(0,0,0,0.1)",
    display: isOpen ? "block" : "none",
    zIndex: 1000,
  };

  const optionStyle = {
    display: "flex",
    alignItems: "center",
    // gap: "0px",
    padding: "6px 12px",
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
    <div ref={ref} style={containerStyle}>
      <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        <img
          src={flags[language]}
          alt={language}
          style={{ width: "20px", height: "15px", marginRight: "8px" }}
        />
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
            <img
              src={flags[lang]}
              alt={lang}
              style={{ width: "20px", height: "15px", marginRight: "8px" }}
            />
            <span>{lang.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

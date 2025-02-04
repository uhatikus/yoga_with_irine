import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { en } from "../translations/en";
import { es } from "../translations/es";
import { ru } from "../translations/ru";

const translations = {
  en,
  es,
  ru,
};

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  return translations[language];
};

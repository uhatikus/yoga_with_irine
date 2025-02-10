import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { en } from "../translations/en";
import { es } from "../translations/es";
import { ru } from "../translations/ru";
import { cat } from "../translations/cat";
import { cn } from "../translations/cn";
import { de } from "../translations/de";
import { fr } from "../translations/fr";
import { it } from "../translations/it";
import { pt } from "../translations/pt";
import { ua } from "../translations/ua";

const translations = {
  cat,
  cn,
  de,
  en,
  es,
  fr,
  it,
  pt,
  ru,
  ua,
};

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  return translations[language];
};

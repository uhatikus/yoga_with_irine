export type Language = "en" | "es" | "ru";

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
}

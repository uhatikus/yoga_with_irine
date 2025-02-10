import { YogaLocation } from "../components/utils/mapUtils";

export type Language =
  | "cat"
  | "cn"
  | "de"
  | "en"
  | "es"
  | "fr"
  | "it"
  | "pt"
  | "ru"
  | "ua";

export interface YogaSession {
  day: string;
  time: string;
  metro: string;
  link: string;
}

export interface QuestionAnswers {
  question: string;
  answers: string[];
}

export interface Review {
  author: string;
  stars: number;
  text: string;
}
export interface TranslationContent {
  header: {
    about: string;
    schedule: string;
    q_and_a: string;
    reviews: string;
    contacts: string;
    certificate: string;
  };
  transparent: {
    first: string;
    second: string;
    third: string;
  };
  about: {
    quote: string;
    auther: string;
  };
  schedule: {
    schedule: string;
    address: string;
    classSchedule: string;
    sessions: YogaSession[];
  };
  locations: YogaLocation[];
  questionAnswers: QuestionAnswers[];
  reviews: Review[];
  footer: {
    phrase1: string;
    phrase2: string;
  };
}

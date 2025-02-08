import { YogaLocation } from "../components/utils/mapUtils";

export type Language = "en" | "es" | "ru";

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
    sessions: YogaSession[];
  };
  locations: YogaLocation[];
  questionAnswers: QuestionAnswers[];
  reviews: Review[];
}

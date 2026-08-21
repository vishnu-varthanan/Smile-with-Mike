export type Theme = "light" | "dark";

export type MikeMood = "idle" | "hero" | "wave";

export type ChatLanguage = "en" | "ta" | "tanglish";

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  customLabel?: string;
}

export interface AboutCard {
  id: string;
  tag: string;
  title: string;
  body: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export type PortfolioCategory =
  | "Comedy"
  | "Brand"
  | "Animation"
  | "Social Media"
  | "E-commerce";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  linkTo?: string;
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  tag: string;
}

export interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
}

export interface FaqItem {
  id: string;
  question: Record<ChatLanguage, string>;
  answer: Record<ChatLanguage, string>;
}

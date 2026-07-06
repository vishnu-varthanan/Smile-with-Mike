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
  image:string;
}

export type MikeMood = "idle" | "hero" | "wave";

export type PortfolioCategory =
  | "Comedy"
  | "Brand"
  | "Animation"
  | "Social Media"
  | "E-commerce"
  | "Trending";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  stat: string;
}

export type ChatLanguage = "en" | "ta" | "tanglish";

export interface ChatMessage {
  id: string;
  from: "mike" | "user";
  text: string;
}

export interface FaqEntry {
  id: string;
  question: Record<ChatLanguage, string>;
  answer: Record<ChatLanguage, string>;
  keywords: string[];
}

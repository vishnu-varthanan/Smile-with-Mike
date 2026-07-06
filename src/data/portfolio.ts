export type PortfolioCategory = "Comedy" | "Brand" | "Animation" | "Social Media" | "E-commerce";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  /** Internal route to navigate to on click, if this card represents a whole site/app rather than a video/post */
  linkTo?: string;
  featured?: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "mike-universe",
    title: "Mike's Universe",
    category: "E-commerce",
    description: "The official Mike merch store — tees, stickers and prints.",
    linkTo: "/mike-universe",
    featured: true,
  },
  {
    id: "brand-launch",
    title: "Weekend Brand Launch",
    category: "Brand",
    description: "A 3-part reel series introducing a snack brand through Mike's eyes.",
  },
  {
    id: "office-life",
    title: "Office Life, Ep. 12",
    category: "Comedy",
    description: "Mike survives another Monday standup meeting.",
  },
  {
    id: "character-pack",
    title: "Custom Character Pack",
    category: "Animation",
    description: "Three new characters designed and rigged for a client campaign.",
  },
  {
    id: "reel-trend",
    title: "Trending Audio Remix",
    category: "Social Media",
    description: "Mike reacts to a trending sound — 4M+ views in a week.",
  },
];

export const PORTFOLIO_FILTERS: ("All" | PortfolioCategory)[] = [
  "All",
  "Comedy",
  "Brand",
  "Animation",
  "Social Media",
  "E-commerce",
];

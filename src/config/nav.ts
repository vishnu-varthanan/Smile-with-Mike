export const ROUTES = {
  home: "/",
  shop: "/shop",
  shopLegacy: "/mike-universe",
} as const;

export const SECTIONS = {
  top: "top",
  about: "about",
  services: "services",
  portfolio: "portfolio",
  team: "team",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export const DOCK_ITEMS = [
  { id: "home", label: "Home", targetId: SECTIONS.top },
  { id: "about", label: "About", targetId: SECTIONS.about },
  { id: "services", label: "Services", targetId: SECTIONS.services },
  { id: "portfolio", label: "Work", targetId: SECTIONS.portfolio },
  { id: "team", label: "Team", targetId: SECTIONS.team },
  { id: "contact", label: "Contact", targetId: SECTIONS.contact },
] as const;

export type DockItemId = (typeof DOCK_ITEMS)[number]["id"];

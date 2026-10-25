import { useEffect, useState, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, LayoutGrid, Mail, Sparkles } from "lucide-react";
import { DOCK_ITEMS, ROUTES, type DockItemId } from "@/config/nav";
import ThemeToggle from "@/components/layout/ThemeToggle";

const DOCK_ICONS: Record<DockItemId, ReactNode> = {
  home: <Home size={17} />,
  about: <Info size={17} />,
  services: <Sparkles size={17} />,
  portfolio: <LayoutGrid size={17} />,
  contact: <Mail size={17} />,
};

export default function BottomNav() {
  const [active, setActive] = useState<DockItemId>("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== ROUTES.home) return;

    const sections = DOCK_ITEMS
      .map((item) => document.getElementById(item.targetId))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = DOCK_ITEMS.find((item) => item.targetId === entry.target.id);
            if (match) setActive(match.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [location.pathname]);

  const handleClick = (item: (typeof DOCK_ITEMS)[number]) => {
    setActive(item.id);

    const scrollToSection = () => {
      document.getElementById(item.targetId)?.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== ROUTES.home) {
      void navigate(ROUTES.home);
      window.setTimeout(scrollToSection, 60);
      return;
    }

    scrollToSection();
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto glass shadow-soft rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-1 max-w-[calc(100vw-1.5rem)] overflow-x-auto no-scrollbar"
      >
        {DOCK_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => handleClick(item)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.88 }}
              className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-full text-inkSoft"
              aria-label={item.label}
              aria-current={isActive}
            >
              {isActive && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-brandRed"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <motion.span
                className="relative z-10"
                animate={{
                  scale: isActive ? [1, 1.15, 1] : 1,
                  color: isActive ? "var(--cream)" : "var(--ink-soft)",
                }}
                transition={{ duration: 0.35 }}
              >
                {DOCK_ICONS[item.id]}
              </motion.span>
            </motion.button>
          );
        })}

        <div className="w-px h-6 bg-(--border-ink) mx-1 shrink-0" />
        <ThemeToggle />
      </motion.nav>
    </div>
  );
}

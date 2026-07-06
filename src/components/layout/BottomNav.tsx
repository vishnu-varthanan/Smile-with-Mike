import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, Sparkles, LayoutGrid, Users, Mail } from "lucide-react";
import Nav from './Nav';

interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  targetId?: string;
}

const ITEMS: DockItem[] = [
  { id: "home", label: "Home", icon: <Home size={17} />, targetId: "top" },
  { id: "about", label: "About", icon: <Info size={17} />, targetId: "about" },
  { id: "services", label: "Services", icon: <Sparkles size={17} />, targetId: "services" },
  { id: "portfolio", label: "Work", icon: <LayoutGrid size={17} />, targetId: "portfolio" },
  { id: "team", label: "Team", icon: <Users size={17} />, targetId: "team" },
  { id: "contact", label: "Contact", icon: <Mail size={17} />, targetId: "contact" },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = ITEMS.map((i) => document.getElementById(i.targetId!)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = ITEMS.find((i) => i.targetId === entry.target.id);
            if (match) setActive(match.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [location.pathname]);

  const handleClick = (item: DockItem) => {
    setActive(item.id);
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(item.targetId!)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else {
      document.getElementById(item.targetId!)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Wrapper spans full width and centers its child with flexbox —
    // this avoids the left-1/2 + translate-x clipping issue with overflow-hidden ancestors.
    <div className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto glass shadow-soft rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-1 max-w-[calc(100vw-1.5rem)] overflow-x-auto no-scrollbar"
      >
        {ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.88 }}
              className="relative flex flex-col items-center justify-center w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-full text-inkSoft"
              aria-label={item.label}
              aria-current={isActive}
            >
              {isActive && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-brandRed/12 border border-brandRed/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <motion.span
                className="relative z-10"
                style={{ color: isActive ? "var(--red)" : "inherit" }}
                animate={isActive ? { scale: [1, 1.18, 1] } : {}}
                transition={{ duration: 0.35 }}
              >
                {item.icon}
              </motion.span>
              {isActive && (
                <motion.span
                  layoutId="dock-dot"
                  className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-brandRed"
                />
              )}
            </motion.button>
          );
        })}

        <div className="w-px h-6 bg-(--border-ink) mx-1 shrink-0" />
        <Nav />
      </motion.nav>
    </div>
  );
}
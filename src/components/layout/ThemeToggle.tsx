import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-cursor="pointer"
      aria-label="Toggle theme"
      className="relative w-14 h-8 rounded-full flex items-center px-1 overflow-hidden"
      style={{
        border: "1px solid var(--border-ink)",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: isDark
            ? "rgba(124, 58, 237, 0.18)"
            : "rgba(220, 38, 38, 0.10)",
        }}
        transition={{ duration: 0.35 }}
      />

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative w-6 h-6 rounded-full flex items-center justify-center z-10"
        style={{ marginLeft: isDark ? "auto" : 0 }}
        animate={{
          backgroundColor: isDark ? "#F100ba" : "#ff5b4e",
          color: "#FFF7ED",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            {isDark ? <Moon size={13} /> : <Sun size={13} />}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <motion.span
        key={theme}
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: 0, scale: 1.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: `2px solid ${isDark ? "#F100ba" : "#ff5b4e"}`,
        }}
      />
    </button>
  );
}

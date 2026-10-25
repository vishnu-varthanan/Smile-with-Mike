import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mikeLogo } from "@/assets";
import { COMING_SOON } from "@/content/comingSoon";

interface ComingSoonProps {
  open: boolean;
  onClose: () => void;
}

export default function ComingSoon({ open, onClose }: ComingSoonProps) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, COMING_SOON.durationMs);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{ background: "color-mix(in srgb, var(--ink) 35%, transparent)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-[360px] bg-card border border-line rounded-[22px] px-7 py-8 text-center"
          >
            <img
              src={mikeLogo}
              alt=""
              className="mx-auto mb-4 w-16 h-16 object-contain"
            />
            <p className="flex items-center justify-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
              <span className="dot" /> Store
            </p>
            <h2
              id="coming-soon-title"
              className="font-display font-bold text-[22px] tracking-tight mb-2"
            >
              {COMING_SOON.title}
            </h2>
            <p className="text-[14.5px] leading-relaxed text-inkSoft m-0">
              {COMING_SOON.body}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

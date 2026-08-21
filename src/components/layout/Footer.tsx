import { ArrowUp, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { mikeScooty } from "@/assets";
import { BRAND } from "@/config/brand";
import { gmailComposeUrl } from "@/lib/links";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="px-[6vw] pt-16 pb-10 text-center border-t border-line w-screen">
      <p className="text-sm text-inkSoft mt-3 mb-4">
        Thanks for stopping by :)
      </p>

      <div className="flex justify-center gap-3 mb-4">
        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="w-[34px] h-[34px] rounded-full border border-line flex items-center justify-center hover:bg-brandRed hover:text-white hover:border-brandRed transition-colors"
        >
          <Instagram size={16} />
        </a>
        <a
          href={gmailComposeUrl()}
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="w-[34px] h-[34px] rounded-full border border-line flex items-center justify-center hover:bg-brandRed hover:text-white hover:border-brandRed transition-colors"
        >
          <Mail size={16} />
        </a>
      </div>

      <p className="text-xs text-inkSoft/70">
        © 2026 {BRAND.name}. All rights reserved.
      </p>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="mt-5 w-[38px] h-[38px] rounded-full border border-line bg-card inline-flex items-center justify-center hover:-translate-y-[5px] transition-transform text-ink"
      >
        <ArrowUp size={16} />
      </button>
      <div className="relative h-28 overflow-hidden mb-4">
        <motion.img
          src={mikeScooty}
          alt="Mike Driving"
          className="absolute bottom-0 w-14 md:20"
          animate={{
            x: ["-20vw", "110vw"],
            y: [0, -2, 2, -2, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </footer>
  );
}

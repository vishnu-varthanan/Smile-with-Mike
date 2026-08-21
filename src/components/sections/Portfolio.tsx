import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { mikeScooty, mikeShopping } from "@/assets";
import Dot from "@/components/common/Dot";
import Reveal from "@/components/common/Reveal";
import { ROUTES, SECTIONS } from "@/config/nav";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from "@/content/portfolio";
import type { PortfolioCategory } from "@/types";

export default function Portfolio() {
  const [filter, setFilter] = useState<"All" | PortfolioCategory>("All");
  const [launching, setLaunching] = useState(false);
  const navigate = useNavigate();

  const items =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  const openMikeUniverse = () => {
    setLaunching(true);
    window.setTimeout(() => {
      void navigate(ROUTES.shop);
    }, 480);
  };

  return (
    <section id={SECTIONS.portfolio} className="py-16">
      <Reveal className="max-w-[640px] mx-auto mb-10 px-[6vw]">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
          <Dot /> Portfolio
        </p>
        <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,42px)]">
          Things we've made
        </h2>
      </Reveal>

      <div className="flex flex-wrap gap-2 px-[6vw] max-w-[1200px] mx-auto mb-8">
        {PORTFOLIO_FILTERS.map((nextFilter) => (
          <button
            key={nextFilter}
            type="button"
            onClick={() => setFilter(nextFilter)}
            className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
              filter === nextFilter
                ? "bg-ink text-paper border-ink"
                : "border-line text-inkSoft hover:border-brandRed hover:text-brandRed"
            }`}
          >
            {nextFilter}
          </button>
        ))}
      </div>

      <div className="px-[6vw] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {items.map((item) => {
            const isMikeUniverse = item.id === "mike-universe";
            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                whileHover={{ y: -6 }}
                onClick={isMikeUniverse ? openMikeUniverse : undefined}
                className={`relative rounded-[22px] border p-6 overflow-hidden ${
                  isMikeUniverse
                    ? "cursor-pointer border-brandRed/40 bg-gradient-to-br from-cream to-card"
                    : "border-line bg-card"
                }`}
              >
                {isMikeUniverse && (
                  <motion.div className="absolute -right-4 -top-4 opacity-90">
                    <img src={mikeShopping} alt="Shopping" className="w-20" />
                  </motion.div>
                )}

                <span className="text-[11px] font-semibold uppercase tracking-wide text-brandPurple">
                  {item.category}
                </span>
                <h3 className="font-display font-semibold text-[17px] mt-2 mb-1.5 pr-14">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-inkSoft leading-relaxed pr-6">
                  {item.description}
                </p>

                {isMikeUniverse && (
                  <motion.span
                    animate={launching ? { scale: [1, 1.3], opacity: [1, 0] } : {}}
                    transition={{ duration: 0.45 }}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brandRed"
                  >
                    <ShoppingBag size={14} /> Visit store <ArrowUpRight size={14} />
                  </motion.span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {launching && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 90%)" }}
            animate={{ clipPath: "circle(150% at 90% 90%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-brandRed flex items-center justify-center"
          >
            <img src={mikeScooty} alt="mike" className="w-24" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

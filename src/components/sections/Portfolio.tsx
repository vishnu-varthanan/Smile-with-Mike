import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { mikeShopping } from "@/assets";
import ComingSoon from "@/components/common/ComingSoon";
import Dot from "@/components/common/Dot";
import Reveal from "@/components/common/Reveal";
import { SECTIONS } from "@/config/nav";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from "@/content/portfolio";
import type { PortfolioCategory } from "@/types";

export default function Portfolio() {
  const [filter, setFilter] = useState<"All" | PortfolioCategory>("All");
  const [soonOpen, setSoonOpen] = useState(false);
  const closeSoon = useCallback(() => setSoonOpen(false), []);

  const items =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section id={SECTIONS.portfolio} className="py-16">
      <Reveal className="max-w-[800px] mx-auto mb-12 px-[6vw]">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
          <Dot /> Portfolio
        </p>
        <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,42px)] whitespace-nowrap max-sm:whitespace-normal">
          Things we've made
        </h2>
      </Reveal>

      <div className="flex flex-wrap gap-2 px-[6vw] max-w-[1200px] mx-auto mb-8">
        {PORTFOLIO_FILTERS.map((nextFilter) => {
          const isStoreFilter = nextFilter === "E-commerce";
          return (
            <button
              key={nextFilter}
              type="button"
              onClick={() => {
                if (isStoreFilter) {
                  setSoonOpen(true);
                  return;
                }
                setFilter(nextFilter);
              }}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                isStoreFilter
                  ? "border-line text-inkSoft opacity-55 grayscale"
                  : filter === nextFilter
                    ? "bg-ink text-paper border-ink"
                    : "border-line text-inkSoft hover:border-brandRed hover:text-brandRed"
              }`}
            >
              {nextFilter}
            </button>
          );
        })}
      </div>

      <div className="px-[6vw] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {items.map((item) => {
            const isStore = item.id === "mike-universe";
            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                whileHover={isStore ? undefined : { y: -6 }}
                onClick={isStore ? () => setSoonOpen(true) : undefined}
                className={`relative rounded-[22px] border p-6 overflow-hidden ${
                  isStore
                    ? "cursor-pointer border-line bg-card opacity-55 grayscale"
                    : "border-line bg-card"
                }`}
              >
                {isStore && (
                  <motion.div className="absolute -right-4 -top-4 opacity-90">
                    <img src={mikeShopping} alt="" className="w-20" />
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

                {isStore && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-inkSoft">
                    <ShoppingBag size={14} /> Visit store <ArrowUpRight size={14} />
                  </span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <ComingSoon open={soonOpen} onClose={closeSoon} />
    </section>
  );
}

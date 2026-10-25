import aboutData from "@/content/about.json";
import Dot from "@/components/common/Dot";
import Reveal from "@/components/common/Reveal";
import { BRAND } from "@/config/brand";
import { SECTIONS } from "@/config/nav";
import type { AboutCard } from "@/types";

const cards = aboutData as AboutCard[];

export default function About() {
  return (
    <section id={SECTIONS.about} className="pt-24 pb-14">
      <Reveal className="max-w-[800px] mx-auto mb-12 px-[6vw]">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
          <Dot /> About
        </p>
        <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,42px)] whitespace-nowrap max-sm:whitespace-normal">
          Welcome to {BRAND.siteName}.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-[6vw] max-w-[1200px] mx-auto">
        {cards.map((card, index) => (
          <Reveal
            key={card.id}
            delay={index * 120}
            className="bg-card border border-line rounded-[22px] p-[30px] hover:-translate-y-1.5 hover:shadow-2xl transition-all"
          >
            <span className="text-xs text-brandRed font-bold tracking-wide">{card.tag}</span>
            <h3 className="text-[19px] mt-2.5 mb-2 font-display font-semibold">{card.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-inkSoft m-0">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

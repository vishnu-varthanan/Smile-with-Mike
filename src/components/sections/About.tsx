import aboutData from "@/data/about.json";
import type { AboutCard } from "@/types";
import Reveal from "@/components/common/Reveal";
import Dot from "@/components/common/Dot";

const cards = aboutData as AboutCard[];

export default function About() {
  return (
    <section id="about" className="pt-24 pb-14">
      <Reveal className="max-w-[640px] mx-auto mb-12 px-[6vw]">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
          <Dot /> About
        </p>
        <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,42px)]">
          Welcome to Mike's Universe.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-[6vw] max-w-[1200px] mx-auto">
        {cards.map((c, i) => (
          <Reveal
            key={c.id}
            delay={i * 120}
            className="bg-card border border-line rounded-[22px] p-[30px] hover:-translate-y-1.5 hover:shadow-2xl transition-all"
          >
            <span className="text-xs text-brandRed font-bold tracking-wide">{c.tag}</span>
            <h3 className="text-[19px] mt-2.5 mb-2 font-display font-semibold">{c.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-inkSoft m-0">{c.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

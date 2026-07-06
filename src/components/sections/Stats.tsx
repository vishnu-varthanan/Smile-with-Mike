import statsData from "@/data/stats.json";
import type { StatItem } from "@/types";
import Reveal from "@/components/common/Reveal";
import Counter from "@/components/common/Counter";

const stats = statsData as StatItem[];

export default function Stats() {
  return (
    <section className="px-[6vw] py-[70px] border-t border-b border-line">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
        {stats.map((s, i) => (
          <Reveal key={s.id} delay={i * 90} className="text-center">
            <div className="font-display font-bold text-brandRed text-[clamp(30px,4vw,46px)]">
              {s.customLabel ? s.customLabel : <Counter to={s.value} suffix={s.suffix} />}
            </div>
            <div className="text-[13px] text-inkSoft mt-1.5 uppercase tracking-wide">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

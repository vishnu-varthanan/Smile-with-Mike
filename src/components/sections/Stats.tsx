import statsData from "@/content/stats.json";
import Counter from "@/components/common/Counter";
import Reveal from "@/components/common/Reveal";
import type { StatItem } from "@/types";

const stats = statsData as StatItem[];

export default function Stats() {
  return (
    <section className="px-[6vw] py-[70px] border-t border-b border-line">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
        {stats.map((stat, index) => (
          <Reveal key={stat.id} delay={index * 90} className="text-center">
            <div className="font-display font-bold text-brandRed text-[clamp(30px,4vw,46px)]">
              {stat.customLabel ? stat.customLabel : <Counter to={stat.value} suffix={stat.suffix} />}
            </div>
            <div className="text-[13px] text-inkSoft mt-1.5 uppercase tracking-wide">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

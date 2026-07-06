import teamData from "@/data/team.json";
import type { TeamMember } from "@/types";
import Reveal from "@/components/common/Reveal";
// import Mike from "@/components/common/Mike";
import Dot from "@/components/common/Dot";

import Vish from "@/assets/Vish.jpeg";
import Mirac from "@/assets/Mirac.jpeg";
import Jo from "../../assets/Jo.jpeg"

const team = teamData as TeamMember[];
const images = {
  vish: Vish,
  mirac: Mirac,
  jo: Jo,
};

export default function Team() {
  return (
    <section id="team" className="pt-16 pb-24">
      <Reveal className="max-w-[640px] mx-auto mb-12 px-[6vw]">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
          <Dot /> Team
        </p>
        <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,42px)]">Artist Behind Mike</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-[6vw] max-w-[1000px] mx-auto">
        {team.map((t, i) => (
          <Reveal
            key={t.id}
            delay={i * 110}
            className="text-center bg-card border border-line rounded-[22px] py-[34px] px-5 hover:-t ranslate-y-1.5 transition-transform"
          >
            {/* <div className="flex justify-center mb-3.5">
            <img
  src={images[t.image as keyof typeof images]}
  alt={t.name}
  
/>
            </div> */}
            <h3 className="text-[15.5px] mb-1 font-display font-semibold">{t.name}</h3>
            <p className="text-[12.5px] text-inkSoft m-0">{t.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

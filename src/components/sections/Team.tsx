import teamData from "@/content/team.json";
import Dot from "@/components/common/Dot";
import Reveal from "@/components/common/Reveal";
import { SECTIONS } from "@/config/nav";
import type { TeamMember } from "@/types";

const team = teamData as TeamMember[];

export default function Team() {
  return (
    <section id={SECTIONS.team} className="pt-16 pb-24">
      <Reveal className="max-w-[640px] mx-auto mb-12 px-[6vw]">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
          <Dot /> Team
        </p>
        <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,42px)]">
          Artist Behind Mike
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-[6vw] max-w-[1000px] mx-auto">
        {team.map((member, index) => (
          <Reveal
            key={member.id}
            delay={index * 110}
            className="text-center bg-card border border-line rounded-[22px] py-[34px] px-5 hover:-translate-y-1.5 transition-transform"
          >
            <h3 className="text-[15.5px] mb-1 font-display font-semibold">{member.name}</h3>
            <p className="text-[12.5px] text-inkSoft m-0">{member.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

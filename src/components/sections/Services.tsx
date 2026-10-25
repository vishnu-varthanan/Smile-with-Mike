import servicesData from "@/content/services.json";
import Dot from "@/components/common/Dot";
import Reveal from "@/components/common/Reveal";
import { SECTIONS } from "@/config/nav";
import type { ServiceItem } from "@/types";

const services = servicesData as ServiceItem[];

export default function Services() {
  return (
    <section id={SECTIONS.services} className="py-16">
      <Reveal className="max-w-[800px] mx-auto mb-12 px-[6vw]">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
          <Dot /> Services
        </p>
        <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,42px)] whitespace-nowrap max-sm:whitespace-normal">
          What we make
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[6vw] max-w-[1200px] mx-auto">
        {services.map((service, index) => (
          <Reveal
            key={service.id}
            delay={(index % 3) * 100}
            className="relative bg-card border border-line rounded-[20px] p-[26px] hover:-translate-y-1 hover:-rotate-[0.6deg] hover:scale-[1.02] hover:border-brandRed transition-transform"
          >
            <span className="block w-[9px] h-[9px] rounded-full bg-brandPurple mb-3.5" />
            <h3 className="text-[16.5px] mb-1.5 font-display font-semibold">{service.title}</h3>
            <p className="text-[13.5px] text-inkSoft m-0 leading-relaxed">{service.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

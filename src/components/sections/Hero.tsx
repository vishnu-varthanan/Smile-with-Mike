import { Instagram, Mail } from "lucide-react";
import Dot from "@/components/common/Dot";
import Mike from "@/components/common/Mike";
import { BRAND } from "@/config/brand";
import { SECTIONS } from "@/config/nav";
import { gmailComposeUrl } from "@/lib/links";

export default function Hero() {
  return (
    <section
      id={SECTIONS.top}
      className="relative min-h-[92vh] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-10 px-[6vw] pt-10 pb-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 100% at 80% 20%, var(--cream) 0%, var(--paper) 62%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span
          className="cloud"
          style={{
            width: 120,
            height: 36,
            top: "12%",
            left: "4%",
            animation: "drift 22s linear infinite",
          }}
        />
        <span
          className="cloud"
          style={{
            width: 80,
            height: 26,
            top: "26%",
            left: "-10%",
            animation: "drift 30s linear infinite -8s",
          }}
        />
        <span
          className="cloud"
          style={{
            width: 60,
            height: 20,
            top: "70%",
            left: "-6%",
            animation: "drift 26s linear infinite -4s",
          }}
        />
      </div>

      <div className="relative z-10">
        <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-4 animate-fadeUp">
          <Dot /> {BRAND.siteName}
        </p>

        <h1 className="font-display font-bold leading-[0.98] tracking-tight text-[clamp(44px,6.4vw,84px)] mb-5 animate-fadeUp [animation-delay:150ms] opacity-0">
          We make people
          <br />
          <span className="text-brandRed">
            smile
            <Dot size="lg" />
          </span>
        </h1>

        <p className="max-w-[440px] text-[17px] leading-relaxed text-inkSoft mb-8 animate-fadeUp [animation-delay:280ms] opacity-0">
          Original Cute - figure Animation, built for reels, told through Mike —
          100K+ people already laugh with us every day.
        </p>

        <div className="flex gap-3.5 flex-wrap mb-7 animate-fadeUp [animation-delay:420ms] opacity-0">
          <a
            href={`#${SECTIONS.services}`}
            className="inline-flex items-center gap-2 px-7 py-[15px] rounded-full font-semibold text-[15px] bg-ink text-paper hover:-translate-y-[3px] hover:scale-[1.03] transition-transform"
          >
            Watch Showreel
          </a>
          <a
            href={`#${SECTIONS.contact}`}
            className="inline-flex items-center gap-2 px-7 py-[15px] rounded-full font-semibold text-[15px] border border-line hover:-translate-y-[3px] hover:scale-[1.03] hover:border-brandRed hover:text-brandRed transition-transform"
          >
            Let's Collaborate
          </a>
        </div>

        <div className="flex gap-3.5 animate-fadeUp [animation-delay:550ms] opacity-0">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-[38px] h-[38px] border border-line rounded-full flex items-center justify-center hover:bg-ink hover:text-paper hover:-translate-y-0.5 transition-all"
          >
            <Instagram size={18} />
          </a>
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="w-[38px] h-[38px] border border-line rounded-full flex items-center justify-center hover:bg-ink hover:text-paper hover:-translate-y-0.5 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="relative flex items-center justify-center animate-fadeUp [animation-delay:280ms] opacity-0">
        <div
          className="absolute w-[320px] h-[320px] rounded-full blur-sm"
          style={{
            background: "radial-gradient(circle, var(--cream) 0%, transparent 70%)",
          }}
        />
        <Mike size={300} mood="hero" />
      </div>
    </section>
  );
}

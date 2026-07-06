import { useState, FormEvent, useRef } from "react";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Reveal from "@/components/common/Reveal";
import Dot from "@/components/common/Dot";
import { BRAND } from "@/constants/brand";

const SERVICE_ID = "service_s36y9ny";
const TEMPLATE_ID = "template_w93759t";
const PUBLIC_KEY = "tf6eU6yLJU_CCdX-E";
const AUTOREPLY_TEMPLATE_ID = "template_t62iwtt";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setSending(true);
    setError(false);

    // Send to you (owner notification)
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then((res) => {
        console.log("Owner email sent:", res);
        return emailjs.sendForm(
          SERVICE_ID,
          AUTOREPLY_TEMPLATE_ID,
          form,
          PUBLIC_KEY,
        );
      })
      .then((res) => {
        console.log("Auto-reply sent:", res);
        setSent(true);
        setSending(false);
      })
      .catch((err) => {
        console.error("Email send failed at step:", err.status, err.text);
        setError(true);
        setSending(false);
      });
  };
  return (
    <section id="contact" className="px-[6vw] py-24">
      <Reveal
        className="max-w-[1100px] mx-auto rounded-[28px] p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        style={{ background: "var(--cream)" } as React.CSSProperties}
      >
        <div>
          <p className="flex items-center text-[13px] font-semibold uppercase tracking-wide text-inkSoft mb-2">
            <Dot /> Contact
          </p>
          <h2 className="font-display font-bold tracking-tight text-[clamp(26px,3.4vw,38px)] mb-6">
            Let's make something people share.
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${BRAND.email}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[14.5px] font-medium"
            >
              <Mail size={16} /> {BRAND.email}
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[14.5px] font-medium"
            >
              <Instagram size={16} /> {BRAND.instagramHandle}
            </a>
            <a
              href="https://wa.me/916380799589"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[14.5px] font-medium"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-card rounded-[20px] p-6 flex flex-col gap-3"
        >
          {sent ? (
            <div className="flex flex-col items-center text-center gap-2.5 py-5 text-sm text-inkSoft">
              <Send size={22} className="paper-plane" />
              <p>Sent! Mike's already smiling. We'll reply soon.</p>
            </div>
          ) : (
            <>
              <input
                name="name"
                placeholder="Your name"
                required
                className="border border-line rounded-xl px-3.5 py-3 text-sm bg-transparent text-ink"
              />
              <input
                name="email"
                placeholder="Brand / email"
                required
                className="border border-line rounded-xl px-3.5 py-3 text-sm bg-transparent text-ink"
              />
              <textarea
                name="message"
                placeholder="What are we making?"
                rows={3}
                required
                className="border border-line rounded-xl px-3.5 py-3 text-sm bg-transparent text-ink resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-ink text-paper hover:-translate-y-[3px] hover:scale-[1.03] transition-transform disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send"} <Send size={14} />
              </button>
              {error && (
                <p className="text-xs text-red-500">
                  Something went wrong — try again or email us directly.
                </p>
              )}
            </>
          )}
        </form>
      </Reveal>
    </section>
  );
}

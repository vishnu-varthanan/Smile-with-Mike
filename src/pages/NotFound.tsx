import { Link } from "react-router-dom";
import Mike from "@/components/common/Mike";
import { ROUTES } from "@/config/nav";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <Mike size={160} mood="idle" />
      <h1 className="font-display font-bold text-3xl mt-6 mb-2">Mike looked everywhere.</h1>
      <p className="text-inkSoft mb-6">This page doesn't exist.</p>
      <Link
        to={ROUTES.home}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-ink text-paper hover:-translate-y-[3px] transition-transform"
      >
        Back home
      </Link>
    </section>
  );
}

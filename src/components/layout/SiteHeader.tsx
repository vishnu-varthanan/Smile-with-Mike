import { Link } from "react-router-dom";
import { mikeLogo } from "@/assets";
import { ROUTES } from "@/config/nav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex flex-col items-center px-[6vw] py-4 backdrop-blur-xl bg-paper/80 border-b border-line">
      <Link
        to={ROUTES.home}
        className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold"
      >
        <img
          src={mikeLogo}
          alt=""
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
        />
        <span>Mike</span>
        <span className="text-brandRed">Verse</span>
      </Link>
    </header>
  );
}

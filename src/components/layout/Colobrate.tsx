import React from "react";

const Colobrate = () => {
  return (
    <header className="sticky top-0 z-40 flex flex-col items-center px-[6vw] py-4 backdrop-blur-xl bg-paper/80 border-b border-line">
      <a
        href="/"
        className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold"
      >
        <span>Smile with</span>
        <span className="text-brandRed">Mike</span>
      </a>
    </header>
  );
};

export default Colobrate;
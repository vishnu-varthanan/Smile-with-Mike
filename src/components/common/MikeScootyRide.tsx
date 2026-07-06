// components/common/MikeScootyRide.tsx
import { motion } from "framer-motion";
import MikeScooty from "@/assets/MikeScooty.gif";

export default function MikeScootyRide() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none fixed inset-x-0 z-40
        bottom-[60px] sm:bottom-[68px] md:bottom-[76px]
        h-14 sm:h-16 md:h-20 lg:h-24
        overflow-hidden
      "
    >
      <motion.img
        src={MikeScooty}
        alt=""
        className="absolute bottom-0 w-14 sm:w-16 md:w-20 lg:w-24"
        initial={{ x: "-20vw" }}
        animate={{
          x: ["-20vw", "120vw"],
          y: [0, -3, 3, -3, 0],
        }}
        transition={{
          x: { duration: 13, repeat: Infinity, ease: "linear" },
          y: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
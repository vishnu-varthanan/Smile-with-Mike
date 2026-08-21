import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  style = {},
}: RevealProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

import React from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export default function Reveal({ children, className = "", delay = 0, as = "div", style = {} }: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = as as any;

  return (
    <Tag
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
    </Tag>
  );
}

import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ to, suffix = "", duration = 1600 }: CounterProps) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const value = useCountUp(to, visible, duration);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

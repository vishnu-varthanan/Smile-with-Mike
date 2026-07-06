import { useCursorDot } from "@/hooks/useCursorDot";

export default function CursorDot() {
  const dotRef = useCursorDot<HTMLDivElement>();
  return <div className="cursor-dot" ref={dotRef} />;
}

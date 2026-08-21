import { mikeArt } from "@/assets";
import type { MikeMood } from "@/types";

interface MikeProps {
  size?: number;
  mood?: MikeMood;
  className?: string;
}

export default function Mike({ size = 220, mood = "idle", className = "" }: MikeProps) {
  return (
    <div
      className={`mike-wrap ${mood} ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={mikeArt} alt="Mike, the Mikeverse character" draggable={false} />
    </div>
  );
}

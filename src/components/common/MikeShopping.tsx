
import mikeSrc from "@/assets/MikeShopping.png";
import type { MikeMood } from "@/types";

interface MikeProps {
  size?: number;
  mood?: MikeMood;
  className?: string;
}

/**
 * Renders Mike exactly as designed — this component never redraws
 * or alters the artwork. All expression comes from CSS motion
 * (float / wave) applied to the wrapper, defined in styles/global.css.
 */
export default function MikeShopping({ size = 220, mood = "idle", className = "" }: MikeProps) {
  return (
    <div
      className={`mike-wrap ${mood} ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={mikeSrc} alt="Mike, the Smile With Mike character" draggable={false} />
    </div>
  );
}

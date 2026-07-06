
import type { MikeMood } from "@/types";
import mikeChatSrc from "@/assets/MikeChat.png"

interface MikeChatProps {
  size?: number;
  mood?: MikeMood;
  className?: string;
}
const MikeChat = ({ size = 220, mood = "idle", className = "" }: MikeChatProps) => {
  return (
     <div
      className={`mike-wrap ${mood} ${className}`}
      style={{ width: size, height: size }}
    >
      <img src={mikeChatSrc} alt="Mike, the Smile With Mike character" draggable={false} />
    </div>
  )
}

export default MikeChat

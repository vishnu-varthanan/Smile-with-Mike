import { useEffect, useRef } from "react";

/**
 * Drives a fixed-position element to lag-follow the mouse cursor.
 * Returns a ref to attach to the dot element. Desktop/hover only —
 * the element itself is hidden on touch via CSS.
 */
export function useCursorDot<T extends HTMLElement = HTMLDivElement>() {
  const dotRef = useRef<T | null>(null);

  useEffect(() => {
    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x - 6}px, ${pos.y - 6}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return dotRef;
}

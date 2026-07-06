interface DotProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Dot({ size = "sm", className = "" }: DotProps) {
  return <i className={`dot ${size === "lg" ? "dot-big" : ""} ${className}`} />;
}

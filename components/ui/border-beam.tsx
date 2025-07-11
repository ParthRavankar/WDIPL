import { cn } from "./utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 8,
  borderWidth = 2,
  colorFrom = "#E5195E",
  colorTo = "#ffffff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-[inherit] opacity-75"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
          WebkitMask: `radial-gradient(farthest-side at center, transparent calc(100% - ${borderWidth}px), white calc(100% - ${borderWidth}px))`,
          mask: `radial-gradient(farthest-side at center, transparent calc(100% - ${borderWidth}px), white calc(100% - ${borderWidth}px))`,
          animation: `border-beam ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
};
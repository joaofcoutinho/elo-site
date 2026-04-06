import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "light" | "white";
  className?: string;
}

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  const variants = {
    blue:
      "bg-[#0070B3]/15 text-[#7DD3F8] border border-[#0070B3]/30",
    light:
      "bg-white/10 text-[#99C1DD] border border-white/15",
    white:
      "bg-white/10 text-white border border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

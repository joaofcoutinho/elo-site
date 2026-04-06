import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
  className?: string;
  dark?: boolean; // true = on dark background
}

export function SectionTag({ children, className, dark = false }: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
        dark
          ? "bg-[#0070B3]/15 text-[#7DD3F8] border border-[#0070B3]/30"
          : "bg-[#0070B3]/10 text-[#0070B3] border border-[#0070B3]/20",
        className
      )}
    >
      {children}
    </span>
  );
}

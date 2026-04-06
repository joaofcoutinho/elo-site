import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0070B3] focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-[#0070B3] text-white hover:bg-[#005A92] active:scale-[0.98] shadow-md shadow-[#0070B3]/20",
    outline:
      "border border-[#0070B3] text-[#0070B3] hover:bg-[#0070B3] hover:text-white active:scale-[0.98]",
    "outline-dark":
      "border border-white/30 text-white hover:bg-white/10 hover:border-white/50 active:scale-[0.98]",
    ghost:
      "text-[#0070B3] hover:bg-[#0070B3]/10 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

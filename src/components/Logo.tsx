import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}

export function Logo({ className = "", size = "md", asLink = true }: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  const inner = (
    <span className={`group relative inline-flex items-center font-display font-bold tracking-tight ${sizes[size]} ${className}`}>
      <span className="relative neon-text">
        ETCHERO
        {/* Claw-mark slashes */}
        <svg
          aria-hidden="true"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          <line x1="-4" y1="48" x2="208" y2="14" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="square"
            className="origin-left scale-x-100 transition-transform duration-500 group-hover:animate-slash" />
          <line x1="-4" y1="56" x2="208" y2="22" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="square" opacity="0.55" />
          <line x1="-4" y1="40" x2="208" y2="6" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="square" opacity="0.35" />
        </svg>
      </span>
    </span>
  );

  if (asLink) return <Link to="/" aria-label="ETCHERO home">{inner}</Link>;
  return inner;
}

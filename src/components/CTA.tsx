import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "primary" | "ghost";

export function CTA({
  to = "/contact",
  href,
  variant = "primary",
  children,
  className = "",
  withArrow = false,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}) {
  const base =
    "group inline-flex h-12 items-center justify-center px-6 text-sm font-semibold tracking-wide uppercase transition-all duration-300";
  const styles =
    variant === "primary"
      ? `${base} bg-primary text-primary-foreground hover:neon-glow-strong`
      : `${base} border border-border text-foreground hover:border-primary hover:text-primary hover:neon-glow`;

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${styles} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className={`${styles} ${className}`}>
      {content}
    </Link>
  );
}

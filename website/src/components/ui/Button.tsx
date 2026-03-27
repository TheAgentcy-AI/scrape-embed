import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-background-deep hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-accent/40",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-background-deep",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
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

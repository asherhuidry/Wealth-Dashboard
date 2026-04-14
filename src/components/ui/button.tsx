import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost";
};

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variantClasses: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white/10 text-white/80 hover:bg-white/15",
    ghost: "text-white/60 hover:text-white hover:bg-white/10",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

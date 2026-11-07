import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs md:text-sm gap-1.5",
    md: "px-6 py-3 text-sm md:text-base gap-2",
    lg: "px-8 py-4 text-base md:text-lg gap-2.5 font-semibold shadow-soft",
  };

  const variantStyles = {
    primary:
      "bg-forest hover:bg-forest-deep text-white focus:ring-forest shadow-md hover:shadow-hover hover:-translate-y-0.5",
    secondary:
      "bg-mountain-teal hover:bg-mountain-dark text-white focus:ring-mountain-teal shadow-md hover:shadow-hover hover:-translate-y-0.5",
    outline:
      "border-2 border-forest text-forest hover:bg-forest hover:text-white focus:ring-forest",
    white:
      "bg-white text-forest hover:bg-cream-warm shadow-md hover:shadow-lg focus:ring-white hover:-translate-y-0.5 font-semibold",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20BA5A] text-white focus:ring-[#25D366] shadow-md hover:shadow-hover hover:-translate-y-0.5 font-semibold",
    ghost:
      "text-forest hover:bg-sage-light/60 focus:ring-forest",
  };

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          fullWidth && "w-full",
          className
        )
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex">{icon}</span>}
    </button>
  );
};


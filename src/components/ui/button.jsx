import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  // Mapeamento de variantes DaisyUI
  const variantClasses = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    destructive: "btn btn-error",
    outline: "btn btn-outline",
    ghost: "btn btn-ghost",
    link: "btn btn-link",
  };

  // Mapeamento de tamanhos DaisyUI
  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    icon: "btn-square btn-md",
  };

  const appliedVariant = variantClasses[variant] || variantClasses.primary;
  const appliedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <button
      className={`${appliedVariant} ${appliedSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

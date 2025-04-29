import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export type BadgeSize = "sm" | "md" | "lg";
export type BadgeVariant = 
  | "default" 
  | "outline" 
  | "primary" 
  | "secondary" 
  | "tertiary" 
  | "success" 
  | "info" 
  | "warning" 
  | "error";

export interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactElement;
  size?: BadgeSize;
  variant?: BadgeVariant;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  size = "md",
  variant = "default",
  removable = false,
  onRemove,
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-900 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-100",
    outline: "border-2 border-neutral-200 text-neutral-900 dark:border-neutral-700 dark:text-neutral-100",
    primary: "bg-gradient-to-br from-primary-100 to-primary-200 text-primary-900 dark:from-primary-900 dark:to-primary-800 dark:text-primary-100",
    secondary: "bg-gradient-to-br from-secondary-100 to-secondary-200 text-secondary-900 dark:from-secondary-900 dark:to-secondary-800 dark:text-secondary-100",
    tertiary: "bg-gradient-to-br from-tertiary-100 to-tertiary-200 text-tertiary-900 dark:from-tertiary-900 dark:to-tertiary-800 dark:text-tertiary-100",
    success: "bg-gradient-to-br from-success-100 to-success-200 text-success-900 dark:from-success-900 dark:to-success-800 dark:text-success-100",
    info: "bg-gradient-to-br from-info-100 to-info-200 text-info-900 dark:from-info-900 dark:to-info-800 dark:text-info-100",
    warning: "bg-gradient-to-br from-warning-100 to-warning-200 text-warning-900 dark:from-warning-900 dark:to-warning-800 dark:text-warning-100",
    error: "bg-gradient-to-br from-error-100 to-error-200 text-error-900 dark:from-error-900 dark:to-error-800 dark:text-error-100",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1 rounded-full",
    md: "text-sm px-3 py-1.5 rounded-full",
    lg: "text-base px-4 py-2 rounded-full",
  };

  const iconSize = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const handleRemoveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium shadow-sm",
        sizeStyles[size],
        variantStyles[variant],
        "transition-all duration-200 hover:shadow-md",
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn("mr-2", iconSize[size])}>
          {React.cloneElement(icon, { 
            size: size === "sm" ? 14 : size === "md" ? 16 : 20,
            className: cn("flex-shrink-0")
          })}
        </span>
      )}
      {children}
      {removable && (
        <button
          type="button"
          className={cn(
            "ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset",
            "hover:bg-black/10 dark:hover:bg-white/10",
            "active:bg-black/20 dark:active:bg-white/20",
            "transition-colors duration-200",
            size === "sm" ? "p-0.5" : size === "md" ? "p-1" : "p-1.5"
          )}
          onClick={handleRemoveClick}
          aria-label="Remove"
        >
          <X size={size === "sm" ? 12 : size === "md" ? 14 : 16} />
        </button>
      )}
    </span>
  );
};

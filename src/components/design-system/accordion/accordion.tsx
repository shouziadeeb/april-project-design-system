import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  id?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const itemId =
    id ||
    `accordion-item-${
      crypto.randomUUID?.() || Math.random().toString(36).substr(2, 9)
    }`;
  const contentId = `${itemId}-content`;
  const headerId = `${itemId}-header`;

  return (
    <div
      className={cn(
        "border-b border-neutral-200 dark:border-neutral-700 last:border-b-0",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <h3>
        <button
          type="button"
          id={headerId}
          className={cn(
            "flex w-full items-center justify-between px-6 py-5 text-left font-medium",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            "transition-all duration-300",
            disabled
              ? "cursor-not-allowed text-neutral-400 dark:text-neutral-600"
              : "hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent dark:hover:from-primary/10",
            isOpen && "bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10"
          )}
          onClick={() => {
            if (!disabled) setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-controls={contentId}
          aria-disabled={disabled}
          disabled={disabled}
        >
          <span className="text-lg">{title}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-neutral-500 transition-all duration-300",
              isOpen && "rotate-180 text-primary"
            )}
          />
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "animate-accordion-down" : "animate-accordion-up h-0"
        )}
      >
        {isOpen && (
          <div className="px-6 py-4 bg-gradient-to-b from-transparent to-neutral-50/50 dark:to-neutral-900/50">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "border border-neutral-200 rounded-xl overflow-hidden dark:border-neutral-700",
        "bg-white dark:bg-neutral-900",
        "shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

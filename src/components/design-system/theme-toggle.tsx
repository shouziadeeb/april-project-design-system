import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (storedTheme) {
        return storedTheme === "dark";
      }
      return prefersDark;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative w-14 h-7 rounded-full p-1 ml-5",
        "bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800",
        "shadow-inner shadow-neutral-400/20 dark:shadow-neutral-900/50",
        "hover:shadow-lg hover:scale-105",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "transition-all duration-300 ease-in-out",
        className
      )}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {/* Background gradient overlay */}
      <div className={cn(
        "absolute inset-0 rounded-full",
        "bg-gradient-to-br from-primary/20 to-transparent",
        "opacity-0 transition-opacity duration-300",
        isDarkMode && "opacity-100"
      )} />
      
      {/* Toggle handle */}
      <div className={cn(
        "absolute top-1 left-1 w-5 h-5 rounded-full",
        "bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-600 dark:to-neutral-700",
        "shadow-lg shadow-neutral-400/30 dark:shadow-neutral-900/50",
        "transition-all duration-300 ease-in-out",
        isDarkMode ? "translate-x-7" : "translate-x-0"
      )}>
        {/* Icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isDarkMode ? (
            <Moon className="h-3 w-3 text-primary transition-all duration-300" />
          ) : (
            <Sun className="h-3 w-3 text-primary transition-all duration-300" />
          )}
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <div className="w-1 h-1 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50" />
        <div className="w-1 h-1 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50" />
      </div>
    </button>
  );
};

export default ThemeToggle;

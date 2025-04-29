import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/design-system/theme-toggle";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Code,
  ExternalLink,
  Palette,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";

const ComponentCard = ({
  title,
  icon,
  description,
  href,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "block p-8 bg-white dark:bg-neutral-900 rounded-2xl",
        "hover:shadow-xl dark:hover:shadow-neutral-900/50 transition-all duration-300",
        "hover:scale-[1.02] hover:border-primary/20 dark:hover:border-primary/20",
        "border-2 border-transparent",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-primary to-primary-600 rounded-xl text-white shadow-lg">{icon}</div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

const Index = () => {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <header className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              Design System
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors flex items-center gap-2 text-base font-medium"
            >
              <Code size={18} />
              <span className="hidden md:inline">GitHub</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Next-Gen Design System
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-10 leading-relaxed">
              A cutting-edge collection of accessible, responsive, and
              customizable components for building modern web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#components"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Components
              </a>
              <a
                href="/docs/color-system"
                className="px-8 py-4 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Color System
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Comprehensive Color System
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Accessible, themeable color tokens with semantic meaning and
                proper contrast ratios.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-secondary to-secondary-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Layers className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Flexible Components
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Highly customizable components designed for reusability and
                adaptability.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-tertiary to-tertiary-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Type-Safe APIs</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Fully typed with TypeScript for better developer experience and
                fewer bugs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold">Components</h2>
            <button
              onClick={() => setShowComponents(!showComponents)}
              className="flex items-center gap-2 text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors text-lg font-medium"
            >
              {showComponents ? "Hide" : "Show"} Components
              <ChevronDown
                className={cn(
                  "transition-transform duration-300",
                  showComponents ? "rotate-180" : ""
                )}
                size={20}
              />
            </button>
          </div>

          {showComponents && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              <ComponentCard
                title="Color System"
                icon={<Palette size={24} />}
                description="A comprehensive token-based color system with primary, secondary, tertiary, and semantic colors."
                href="/docs/color-system"
              />

              <ComponentCard
                title="Accordion"
                icon={<ChevronDown size={24} />}
                description="A vertically stacked set of interactive headings that each reveal a section of content."
                href="/docs/accordion"
              />

              <ComponentCard
                title="Badges"
                icon={<Sparkles size={24} />}
                description="Compact visual indicators for statuses, categories, or additional information."
                href="/docs/badge"
              />

              <ComponentCard
                title="Sidebar Navigation"
                icon={<Layers size={24} />}
                description="A collapsible sidebar component for primary navigation in applications."
                href="/docs/sidebar"
              />

              <ComponentCard
                title="Tabs"
                icon={<Zap size={24} />}
                description="A set of layered sections of content that display one panel at a time."
                href="/docs/tabs"
              />
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-8 md:mb-0">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Component size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                Design System
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <a
                href="/docs/color-system"
                className="hover:text-primary transition-colors text-lg font-medium"
              >
                Documentation
              </a>
              <a href="#" className="hover:text-primary transition-colors text-lg font-medium">
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors text-lg font-medium">
                License
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400 text-base">
            © {new Date().getFullYear()} ChromaFlow Design System. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

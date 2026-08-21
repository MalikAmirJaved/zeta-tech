"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Blogs & Events", href: "#insights" },
  { label: "Careers", href: "#careers" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark border-b border-dark sticky top-0 z-50">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[144px] flex items-center justify-between h-[136px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Zeta Tech"
            className="h-[76px] w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[38.4px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 text-white font-heading font-semibold text-base hover:text-primary transition-colors"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="w-3 h-3" strokeWidth={2.4} />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-[10px] hover:opacity-90 transition-opacity inline-block"
          >
            Talk to Zeta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark border-t border-dark px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-heading font-semibold text-base hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-[10px] text-center hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

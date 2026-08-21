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
    <header className="bg-zeta-dark border-b border-zeta-border sticky top-0 z-50">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[144px] flex items-center justify-between h-[136px]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="w-[77px] h-[76px] bg-zeta-red rounded-lg flex items-center justify-center">
            <span className="text-zeta-white font-heading font-bold text-4xl">Z</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[38.4px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 text-zeta-white font-heading font-semibold text-base hover:text-zeta-red transition-colors"
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
            className="bg-zeta-red text-zeta-white font-heading font-semibold text-sm px-5 py-2.5 rounded-[10px] hover:bg-red-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-zeta-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zeta-dark border-t border-zeta-border px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-zeta-white font-heading font-semibold text-base hover:text-zeta-red transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-zeta-red text-zeta-white font-heading font-semibold text-sm px-5 py-2.5 rounded-[10px] text-center hover:bg-red-700 transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

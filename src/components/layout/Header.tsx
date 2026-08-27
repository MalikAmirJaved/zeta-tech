"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Blogs & Events", href: "#insights" },
  { label: "Careers", href: "#careers" },
];

const MegaProducts = dynamic(() => import("./MegaProducts").then((m) => m.MegaProducts), { ssr: false });
const MegaServices = dynamic(() => import("./MegaServices").then((m) => m.MegaServices), { ssr: false });

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuEnter = (label: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

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
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleMenuEnter(item.label)}
              onMouseLeave={handleMenuLeave}
            >
              <a
                href={item.href}
                className="flex items-center gap-1.5 text-white font-heading font-semibold text-base hover:text-primary transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3" strokeWidth={2.4} />
                )}
              </a>

              {/* Products Mega Menu — fixed to viewport, full width */}
              {item.label === "Products" && activeMenu === "Products" && (
                <div
                  className="visible opacity-100 transition-all duration-150 pointer-events-auto fixed left-0 right-0 top-[136px] w-screen z-50"
                  onMouseEnter={() => handleMenuEnter("Products")}
                  onMouseLeave={handleMenuLeave}
                >
                  <MegaProducts />
                </div>
              )}

              {/* Services Mega Menu — fixed to viewport, full width */}
              {item.label === "Services" && activeMenu === "Services" && (
                <div
                  className="visible opacity-100 transition-all duration-150 pointer-events-auto fixed left-0 right-0 top-[136px] w-screen z-50"
                  onMouseEnter={() => handleMenuEnter("Services")}
                  onMouseLeave={handleMenuLeave}
                >
                  <MegaServices />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-[10px] inline-flex items-center gap-2"
          >
            Talk to Zeta
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:-rotate-30"
            />
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
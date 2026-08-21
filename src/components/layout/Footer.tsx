"use client";

import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Blogs & Events", href: "#insights" },
  { label: "Careers", href: "#careers" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: "/images/Vector (8).svg" },
  { label: "X", href: "#", icon: "/images/Vector (9).svg" },
  { label: "LinkedIn", href: "#", icon: "/images/Vector (10).svg" },
  { label: "Instagram", href: "#", icon: "/images/Vector (11).svg" },
];

export function Footer() {
  return (
    <footer className="bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Row: 3 columns */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-start pt-20">
          {/* Left - Follow Us */}
          <div className="flex flex-col gap-6">
            <span className="font-heading font-semibold text-base leading-[21px] text-foreground">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Center - Logo + Nav */}
          <div className="flex flex-col items-center gap-10">
            <a href="/">
              <Image
                src="/images/logo.png"
                alt="Zeta Tech"
                width={77}
                height={76}
                className="w-[77px] h-[76px]"
              />
            </a>
            <div className="flex items-center gap-[38.4px]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-heading font-semibold text-base leading-[21px] text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Email Subscribe */}
          <div className="flex flex-col items-end gap-6">
            <div className="relative w-[354px] h-[52px]">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full h-full px-4 border border-border rounded-2xl font-heading font-semibold text-base leading-[21px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
            <button className="w-[126px] h-[51px] border border-primary rounded-2xl font-heading font-semibold text-base leading-[21px] text-primary hover:bg-primary hover:text-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Large ZETA text at bottom */}
      <div className="relative w-full flex justify-center pt-10 pb-0 overflow-hidden">

      </div>
    </footer>
  );
}

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
    <footer className="relative bg-white h-[582px] overflow-hidden">
      {/* Large ZETA Background Image */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none select-none">
        <Image
          src="/logoZETA.png"
          alt=""
          width={1044}
          height={364}
          className="w-[1044px] h-[364px] object-contain"
        />
      </div>

      {/* Trust Strip - Bottom Blur */}
      <div
        className="absolute bottom-0 left-0 w-full h-[108px]"
        style={{
          background: "rgba(0, 0, 0, 0.004)",
          filter: "blur(12px)",
        }}
      />

      {/* Follow Us Section - Left */}
      <div className="absolute left-20 top-20 flex flex-col gap-6">
        <span className="font-heading font-semibold text-base leading-[21px] text-foreground capitalize">
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

      {/* Centered Logo */}
      <div className="absolute left-1/2 top-16 -translate-x-1/2">
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Zeta Tech"
            width={77}
            height={76}
            className="w-[77px] h-[76px]"
          />
        </a>
      </div>

      {/* Nav Items - Centered Below Logo */}
      <div className="absolute left-1/2 top-[149px] -translate-x-1/2 flex items-center gap-[38.4px]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-heading font-semibold text-base leading-[21px] text-foreground capitalize hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Email Subscribe Section - Right */}
      <div className="absolute right-[130px] top-20 flex flex-col items-end gap-6">
        {/* Email Input */}
        <div className="relative w-[354px] h-[52px]">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full h-full px-4 border border-foreground rounded-2xl font-heading font-semibold text-base leading-[21px] text-foreground placeholder:text-foreground/70 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Subscribe Button */}
        <button className="w-[126px] h-[51px] border border-primary rounded-2xl font-heading font-semibold text-base leading-[21px] text-primary hover:bg-primary hover:text-white transition-colors">
          Subscribe
        </button>
      </div>
    </footer>
  );
}

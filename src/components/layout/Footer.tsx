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
  {
    label: "Facebook",
    href: "#",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
  },
];

export function Footer() {
  return (
    <footer className="relative bg-white h-[582px] overflow-hidden">
      {/* Large ZETA Background Image */}
      <div className="absolute left-1/2 top-[247px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <Image
          src="/logoZETA.png"
          alt=""
          width={1044}
          height={364}
          className="w-[1044px] h-[364px] object-contain opacity-70"
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Centered Logo */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2">
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

      {/* Nav Items - Centered */}
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

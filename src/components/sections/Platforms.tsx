"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const platforms = [
  {
    title: "ConnectHub",
    description:
      "Application communication relays and security APIs engineered for massive throughput, global packet routing, and uncompromised enterprise communications.",
  },
  {
    title: "CloudHub",
    description:
      "Sovereign orchestration panel enabling seamless deployment of hyper-localized automated secure virtualization host clusters.",
  },
  {
    title: "Zekli",
    description:
      "Integrated developer security suite designed to scale real-time network intelligence, proactive traffic diagnostics, and telemetry pipeline models.",
  },
];

function StatusIndicator() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-10 h-px bg-primary opacity-40" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
    </div>
  );
}

export function Platforms() {
  return (
    <section
      id="products"
      className="relative bg-secondary py-[120px] px-6 lg:px-[144px] overflow-hidden"
    >
      {/* Background Logo */}
      <div className="absolute right-[-150px] top-28 w-[650px] h-[645px] pointer-events-none z-0">
        <Image
          src="/biglogo.png"
          alt=""
          width={650}
          height={645}
          priority
          className="w-[650px] h-[645px] object-contain opacity-[0.08]"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Centered Content */}
        <div className="flex flex-col items-center gap-16 mb-[56px]">
          {/* Headings Group */}
          <div className="flex flex-col items-center gap-4">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
                ZETA PRODUCTS
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground text-center">
              Purpose-built platforms powered
              <br />
              by Zeta&apos;s infrastructure.
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-[17px] leading-[26px] text-muted-foreground text-center max-w-[922px]">
              Zeta Technologies delivers cutting-edge telecom, cloud, and
              cybersecurity solutions that transform how enterprises connect,
              communicate, and compete in the digital age.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="bg-white border border-border rounded-2xl p-8 flex flex-col gap-4 h-[232px]"
            >
              {/* Status Indicator */}
              <StatusIndicator />

              {/* Text Content */}
              <div className="flex flex-col gap-2.5 flex-1">
                <h3 className="font-heading font-bold text-[28px] leading-[36px] text-foreground">
                  {platform.title}
                </h3>
                <p className="font-sans text-[15px] leading-[22px] text-muted-foreground">
                  {platform.description}
                </p>
              </div>

              {/* Footer Link */}
              <div className="flex items-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-heading font-bold text-sm leading-[18px] hover:underline"
                >
                  Explore
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

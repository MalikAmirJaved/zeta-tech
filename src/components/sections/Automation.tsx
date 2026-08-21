"use client";

import { ArrowRight } from "lucide-react";

const capabilities = [
  { name: "Connectivity", icon: "/images/icon-circle.svg", position: "left" },
  { name: "Network Intelligence", icon: "/images/icon-circle (1).svg", position: "left" },
  { name: "Cloud Computing", icon: "/images/icon-circle (2).svg", position: "left" },
  { name: "Intelligent Automation", icon: "/images/icon-circle (3).svg", position: "center", active: true },
  { name: "Wholesale Voice", icon: "/images/icon-circle (4).svg", position: "right" },
  { name: "A2P Messaging", icon: "/images/icon-circle (5).svg", position: "right" },
  { name: "CPaaS", icon: "/images/icon-circle (6).svg", position: "right" },
];

export function Automation() {
  return (
    <section className="bg-off-white py-20 px-6 lg:px-[144px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Icons Arc Section */}
        <div className="relative h-[280px] mb-8">
          {/* Background Arc */}
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src="/images/automationback.png"
              alt=""
              className="w-[800px] h-auto opacity-30"
            />
          </div>

          {/* Icons Container */}
          <div className="relative flex items-center justify-center gap-4 lg:gap-8">
            {/* Left Icons */}
            <div className="flex items-end gap-4 lg:gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                  <img src="/images/icon-circle.svg" alt="Connectivity" className="w-8 h-8" />
                </div>
                <span className="mt-2 font-sans text-xs text-foreground text-center">Connectivity</span>
              </div>

              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                  <img src="/images/icon-circle (1).svg" alt="Network Intelligence" className="w-8 h-8" />
                </div>
                <span className="mt-2 font-sans text-xs text-foreground text-center">Network Intelligence</span>
              </div>

              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                  <img src="/images/icon-circle (2).svg" alt="Cloud Computing" className="w-8 h-8" />
                </div>
                <span className="mt-2 font-sans text-xs text-foreground text-center">Cloud Computing</span>
              </div>
            </div>

            {/* Center Icon */}
            <div className="flex flex-col items-center mb-12">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <img src="/images/icon-circle (3).svg" alt="Intelligent Automation" className="w-10 h-10" />
              </div>
              <span className="mt-2 font-sans text-sm font-semibold text-primary text-center">Intelligent Automation</span>
            </div>

            {/* Right Icons */}
            <div className="flex items-end gap-4 lg:gap-8">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                  <img src="/images/icon-circle (4).svg" alt="Wholesale Voice" className="w-8 h-8" />
                </div>
                <span className="mt-2 font-sans text-xs text-foreground text-center">Wholesale Voice</span>
              </div>

              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                  <img src="/images/icon-circle (5).svg" alt="A2P Messaging" className="w-8 h-8" />
                </div>
                <span className="mt-2 font-sans text-xs text-foreground text-center">A2P Messaging</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                  <img src="/images/icon-circle (6).svg" alt="CPaaS" className="w-8 h-8" />
                </div>
                <span className="mt-2 font-sans text-xs text-foreground text-center">CPaaS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
              OUR CAPABILITIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-[44px] leading-[57px] text-center text-foreground mb-5">
            Intelligent Automation
          </h2>

          {/* Subheading */}
          <p className="font-sans text-base leading-[21px] text-center text-muted-foreground max-w-[600px] mx-auto mb-8">
            Optimising operational tasks & infrastructure processes using secure, low-latency AI pipelines.
          </p>

          {/* CTA Button */}
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

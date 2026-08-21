"use client";

import { ArrowRight } from "lucide-react";

export function Automation() {
  return (
    <section className="bg-off-white py-20 px-6 lg:px-[144px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Icons Arc Section */}
        <div className="relative h-[320px] mb-8">
          {/* Background Arc */}
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src="/images/automationback.png"
              alt=""
              className="w-[900px] h-auto opacity-40"
            />
          </div>

          {/* Icons Container */}
          <div className="relative flex items-start justify-center">
            {/* Left Icons */}
            <div className="absolute left-[8%] flex items-start">
              <div className="flex flex-col items-center" style={{ marginTop: "60px" }}>
                <div className="w-[72px] h-[72px] rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-sm">
                  <img src="/images/wifi.svg" alt="Connectivity" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs text-foreground text-center">Connectivity</span>
              </div>
            </div>

            <div className="absolute left-[18%] flex items-start">
              <div className="flex flex-col items-center" style={{ marginTop: "35px" }}>
                <div className="w-[72px] h-[72px] rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-sm">
                  <img src="/images/Vector (4).svg" alt="Network Intelligence" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs text-foreground text-center">Network Intelligence</span>
              </div>
            </div>

            <div className="absolute left-[30%] flex items-start">
              <div className="flex flex-col items-center" style={{ marginTop: "15px" }}>
                <div className="w-[72px] h-[72px] rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-sm">
                  <img src="/images/cloud.svg" alt="Cloud Computing" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs text-foreground text-center">Cloud Computing</span>
              </div>
            </div>

            {/* Center Icon */}
            <div className="absolute left-[43%] flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <img src="/images/Vector (5).svg" alt="Intelligent Automation" className="w-10 h-10" />
                </div>
                <span className="mt-3 font-sans text-sm font-semibold text-primary text-center">Intelligent Automation</span>
              </div>
            </div>

            {/* Right Icons */}
            <div className="absolute right-[30%] flex items-start">
              <div className="flex flex-col items-center" style={{ marginTop: "15px" }}>
                <div className="w-[72px] h-[72px] rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-sm">
                  <img src="/images/Vector (6).svg" alt="Wholesale Voice" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs text-foreground text-center">Wholesale Voice</span>
              </div>
            </div>

            <div className="absolute right-[18%] flex items-start">
              <div className="flex flex-col items-center" style={{ marginTop: "35px" }}>
                <div className="w-[72px] h-[72px] rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-sm">
                  <img src="/images/Vector (7).svg" alt="A2P Messaging" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs text-foreground text-center">A2P Messaging</span>
              </div>
            </div>

            <div className="absolute right-[8%] flex items-start">
              <div className="flex flex-col items-center" style={{ marginTop: "60px" }}>
                <div className="w-[72px] h-[72px] rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-sm">
                  <img src="/images/code.svg" alt="CPaaS" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs text-foreground text-center">CPaaS</span>
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

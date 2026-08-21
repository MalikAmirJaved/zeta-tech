"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herobackground.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-overlay" />
      
      <div className="relative z-10 max-w-[1728px] mx-auto px-6 lg:px-[144px] h-full flex items-center py-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-[60px] w-full">
          {/* Hero Left Content */}
          <div className="flex-1 max-w-[800px]">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white font-heading font-bold text-[11px] tracking-[3px] uppercase">
                SOVEREIGN INFRASTRUCTURE · PAKISTAN
              </span>
            </div>

            {/* Headlines */}
            <div className="flex flex-col gap-1 mb-7">
              <h1 className="font-heading font-bold text-[84px] leading-[80px] tracking-[-0.02em] text-white">
                Powering
              </h1>
              <h1 className="font-heading font-bold text-[84px] leading-[80px] tracking-[-0.02em] text-white">
                Sovereign Digital
              </h1>
              <h1 className="font-heading font-bold text-[84px] leading-[80px] tracking-[-0.02em] text-primary">
                Infrastructure
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-dark-muted font-sans text-[17px] leading-[26px] max-w-[520px] mb-7">
              Zeta Technologies delivers high-performance telecommunications backbone systems,
              sovereign cloud platforms, and intelligent automation across Pakistan&apos;s enterprise landscape.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
              >
                Talk to Zeta
              </a>
              <a
                href="#about"
                className="border border-white/70 text-white font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                About Zeta
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Hero Right - NOC Dashboard */}
          <div className="w-full max-w-[580px]">
            <img
              src="/images/HeroRight.png"
              alt="NOC Dashboard"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

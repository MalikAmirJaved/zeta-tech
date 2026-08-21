"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="bg-card py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
            GET STARTED
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground mb-5">
          LET&apos;S BUILD<br />
          <span className="text-primary">WHAT&apos;S NEXT</span>
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-muted-foreground mb-8 max-w-[600px] mx-auto">
          Talk to Zeta about sovereign infrastructure, digital connectivity, or intelligent
          automation and let&apos;s engineer your business&apos;s future.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
        >
          Talk to the Team
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

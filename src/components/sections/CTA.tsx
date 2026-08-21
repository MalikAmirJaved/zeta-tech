"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="bg-zeta-white py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zeta-red/20 bg-zeta-red/[0.0588235] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-zeta-red" />
          <span className="text-zeta-red font-heading font-bold text-[11px] tracking-[3px] uppercase">
            GET STARTED
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-zeta-text mb-5">
          LET&apos;S BUILD<br />
          <span className="text-zeta-red">WHAT&apos;S NEXT</span>
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-zeta-text-light mb-8 max-w-[600px] mx-auto">
          Talk to Zeta about sovereign infrastructure, digital connectivity, or intelligent
          automation and let&apos;s engineer your business&apos;s future.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-zeta-red text-zeta-white font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:bg-red-700 transition-colors"
        >
          Talk to the Team
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

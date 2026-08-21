"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-white py-[120px] px-6 lg:px-[144px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/cta/7f965434eac970a1418b6c0efa72f239261dacda.png"
          alt=""
          fill
          className="object-cover opacity-[0.2]"
        />
      </div>

      {/* Accent Lines */}
      <div
        className="absolute left-[-120px] w-[240px] h-[2px] bg-primary opacity-[0.18]"
        style={{ top: "calc(50% - 1px - 49.4px)", transform: "rotate(-12deg)" }}
      />
      <div
        className="absolute right-[-120px] w-[240px] h-[2px] bg-primary opacity-[0.18]"
        style={{ top: "calc(50% - 1px + 0.5px)", transform: "rotate(12deg)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[760px] mx-auto flex flex-col items-center gap-6">
        {/* Title */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground text-center">
          LET&apos;S BUILD
          <br />
          <span className="text-primary">WHAT&apos;S NEXT</span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-lg leading-[30px] text-muted-foreground text-center max-w-[640px]">
          Talk to Zeta about your connectivity, cloud or digital infrastructure
          requirements. Let&apos;s configure your sovereign solution.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 bg-primary text-white font-heading font-bold text-base leading-[21px] px-[30px] py-4 rounded-xl hover:opacity-90 transition-opacity"
        >
          Talk To Our Team
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

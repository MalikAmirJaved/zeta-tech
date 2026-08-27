"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    company: "Jubilee Insurance",
    stat: "45%",
    statLabel: "Cost reduction achieved",
    description:
      "By migrating their core transaction registry layers into Zeta's virtualization cluster architecture, securing critical data trails.",
    image: "/images/provenresults/c828f00d4255d82399b45ec1644428d97d4c71ad.png",
  },
  {
    company: "Systems Ltd",
    stat: "99.99%",
    statLabel: "Mission-critical network uptime",
    description:
      "Powering reliable telecom backbone communication relays and cloud backup protocols spanning main metro processing centers.",
    image: "/images/provenresults/5de1e94021554f5d8fca8a0ccaef5e435ab129f8.png",
  },
  {
    company: "National Bank",
    stat: "2.5M+",
    statLabel: "Secure daily transactions",
    description:
      "Handling robust financial workloads and high-throughput databases securely with dedicated hardware machine intelligence modules.",
    image: "/images/provenresults/be07f621ae4c8dac4e4749a8813c5cb76e82f61c.png",
  },
];

export function Industries() {
  return (
    <section className="bg-white py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        {/* Centered Headings */}
        <div className="flex flex-col items-center gap-4">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
              PROVEN RESULTS
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground text-center">
            Different industries. Different challenges.
            <br />
            Same trusted partner.
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-lg leading-[28px] text-[#555555] text-center">
            From banks to telcos to government agencies, Zeta powers the
            infrastructure behind Pakistan&apos;s digital transformation.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className="relative rounded-2xl overflow-hidden h-[262px]"
            >
              {/* Background Image */}
              <Image
                src={study.image}
                alt={study.company}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/60" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3 p-7 h-full">
                {/* Company */}
                <span className="font-heading font-bold text-xs leading-[16px] tracking-[0.5px] text-white">
                  {study.company}
                </span>

                {/* Stat */}
                <span className="font-heading font-bold text-[64px] leading-[72px] tracking-[-0.02em] text-white">
                  {study.stat}
                </span>

                {/* Stat Label */}
                <span className="font-heading font-bold text-base leading-[22px] text-white">
                  {study.statLabel}
                </span>

                {/* Description */}
                <p className="font-sans text-sm leading-[20px] text-white">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#case-studies"
          className="group inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[15px] leading-5 px-7 py-4 rounded-[10px]"
        >
          View All Case Studies
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-30" />
        </a>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    title: "Sovereign Cloud Architectures in Modern Telecommunication Systems",
    category: "INDUSTRY WHITE PAPER",
    description:
      "An in-depth regulatory and architectural review of localization standards, hardware trust zones, and high-performance low-latency redundancies across regional transit corridors.",
    image: "/images/Article 1 Image.png",
  },
  {
    title: "Terrestrial Landing Station Reaches Operational Milestone",
    category: "INDUSTRY WHITE PAPER",
    description:
      "Path diversity validation testing finalized with 100% telemetry target achievements. Successful operations in major corridors.",
    image: "/images/Article 1 Image (1).png",
  },
  {
    title: "Network Intelligence Automation and Traffic Shaping Models",
    category: "INDUSTRY WHITE PAPER",
    description:
      "Implementing proactive deep diagnostics to secure routing redundancies throughout core corridors. Protecting packets at runtime.",
    image: "/images/Article 1 Image (2).png",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      className="bg-secondary py-[120px] px-6 lg:px-[144px]"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[50px]">
        {/* Centered Headings */}
        <div className="flex flex-col items-center gap-4">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
              BLOGS & EVENTS
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground text-center">
            Latest Insights & System Updates
          </h2>
        </div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image - Fixed height */}
              <div className="relative w-full h-[334px] shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 453px"
                  className="object-cover"
                />
              </div>

              {/* Content - Fixed padding */}
              <div className="flex flex-col gap-3 p-5 pt-6 flex-1">
                {/* Category */}
                <span className="font-heading font-bold text-[11px] leading-[14px] tracking-[1px] text-primary uppercase">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-2xl leading-[31px] text-foreground">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[15px] leading-[22px] text-muted-foreground">
                  {article.description}
                </p>

                {/* Read Article Link */}
                <div className="mt-auto pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm leading-[18px]"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#insights"
          className="group inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-[15px] leading-5 px-7 py-4 rounded-[10px]"
        >
          View All Insights
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-30" />
        </a>
      </div>
    </section>
  );
}

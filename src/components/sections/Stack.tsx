"use client";

import { ArrowRight } from "lucide-react";

const stackItems = [
  {
    title: "Connectivity Pipeline",
    description: "Carrier-grade connectivity backbone for cross-border and domestic data transit.",
    link: "#",
    linkText: "View Details",
  },
  {
    title: "Core Cloud Layer",
    description: "Sovereign cloud infrastructure for enterprise and government workloads.",
    link: "#",
    linkText: "View Details",
  },
  {
    title: "Data Center Strata",
    description: "Tier III certified data center facilities with 99.99% uptime guarantee.",
    link: "#",
    linkText: "View Details",
  },
];

const rightItems = [
  {
    title: "Built on the Sovereign Stack",
    description: "Purpose-built technology platform engineered for Pakistan's digital sovereignty requirements.",
  },
  {
    title: "Intelligent Automation",
    description: "AI-driven orchestration and management across all infrastructure layers.",
  },
  {
    title: "Network Intelligence",
    description: "Real-time analytics and predictive intelligence for optimal performance.",
  },
];

export function Stack() {
  return (
    <section className="bg-zeta-page-bg py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zeta-red/20 bg-zeta-red/[0.0588235] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-zeta-red" />
          <span className="text-zeta-red font-heading font-bold text-[11px] tracking-[3px] uppercase">
            THE STACK
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-zeta-text mb-4">
          The Sovereign Intelligence Stack
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-zeta-text-light mb-12 max-w-[600px]">
          An end-to-end infrastructure stack designed, operated, and secured within national borders.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Stack Items */}
          <div className="flex-1 flex flex-col gap-6">
            {stackItems.map((item, index) => (
              <div
                key={index}
                className="bg-zeta-white border border-zeta-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading font-bold text-xl text-zeta-text mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-zeta-text-light mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-zeta-red font-heading font-semibold text-sm hover:underline"
                >
                  {item.linkText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Right - Built on Stack */}
          <div className="flex-1">
            <div className="bg-zeta-dark rounded-2xl p-8 h-full">
              <h3 className="font-heading font-bold text-2xl text-zeta-white mb-8">
                Built on the Sovereign Stack
              </h3>
              
              <div className="flex flex-col gap-8">
                {rightItems.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-1 h-full bg-zeta-red rounded-full min-h-[60px]" />
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-zeta-white mb-1">
                        {item.title}
                      </h4>
                      <p className="font-sans text-sm text-zeta-gray">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

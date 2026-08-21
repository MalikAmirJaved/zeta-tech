"use client";

import { ArrowRight } from "lucide-react";

const platforms = [
  {
    title: "ConnectHub",
    description: "Enterprise-grade connectivity platform for seamless cross-border data transit and network management.",
    features: ["Multi-carrier support", "Real-time monitoring", "SLA management"],
  },
  {
    title: "CloudHub",
    description: "Sovereign cloud infrastructure delivering secure, compliant, and high-performance computing services.",
    features: ["Data residency", "Auto-scaling", "Enterprise security"],
  },
  {
    title: "Zekil",
    description: "Intelligent automation platform for optimizing telecommunications and infrastructure operations.",
    features: ["AI-driven insights", "Predictive analytics", "Workflow automation"],
  },
];

export function Platforms() {
  return (
    <section id="products" className="bg-card py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
            ZETA PLATFORMS
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground mb-5">
          Purpose-built platforms powered<br />
          by Zeta&apos;s infrastructure.
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-muted-foreground mb-12 max-w-[700px] mx-auto">
          Zeta Technologies delivers high-performance telecommunications backbone systems,
          sovereign cloud platforms, and intelligent automation for enterprise, government, and telecom operators across Pakistan.
        </p>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="bg-background border border-border rounded-2xl p-8 text-left hover:shadow-lg transition-shadow"
            >
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                {platform.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                {platform.description}
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:underline"
              >
                Explore
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#products"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
        >
          View All Products
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

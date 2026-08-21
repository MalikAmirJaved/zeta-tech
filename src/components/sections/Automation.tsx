"use client";

import {
  Shield,
  Server,
  Globe,
  Radio,
  Cpu,
  Network,
  Cloud,
  Database,
  Lock,
  Layers,
} from "lucide-react";

const icons = [
  { icon: Shield, label: "Security" },
  { icon: Server, label: "Compute" },
  { icon: Globe, label: "Global" },
  { icon: Radio, label: "Network" },
  { icon: Cpu, label: "Processing" },
  { icon: Network, label: "Routing" },
  { icon: Cloud, label: "Cloud" },
  { icon: Database, label: "Storage" },
  { icon: Lock, label: "Encryption" },
  { icon: Layers, label: "Stack" },
];

export function Automation() {
  return (
    <section className="bg-dark py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Icon Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {icons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-16 h-16 rounded-2xl border border-dark bg-dark-darker flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <Icon className="w-7 h-7 text-dark-muted" />
              </div>
            );
          })}
        </div>

        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
            CORE CAPABILITIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-center text-white mb-5">
          Intelligent Automation
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-center text-dark-muted max-w-[600px] mx-auto mb-8">
          Optimizing telecommunications, cloud & infrastructure operations across services, partners, and sovereign frameworks.
        </p>

        {/* CTA Button */}
        <a
          href="#services"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

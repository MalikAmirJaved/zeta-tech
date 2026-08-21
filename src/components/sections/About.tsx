"use client";

import { ArrowRight, Clock, ShieldCheck, Lock, Globe } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "15+",
    subtitle: "ESTABLISHED PROVEN TRUST",
  },
  {
    icon: ShieldCheck,
    title: "Licensed LDI Operator",
    subtitle: "REGULATORY COMPLIANT",
  },
  {
    icon: Lock,
    title: "T-CLS Gateway",
    subtitle: "SECURE TERRESTRIAL BORDER",
  },
  {
    icon: Globe,
    title: "Network Reach",
    subtitle: "NATIONWIDE BACKBONE",
  },
];

export function About() {
  return (
    <section id="about" className="bg-off-white py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Content */}
        <div className="flex-[1.2]">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
              ABOUT ZETA
            </span>
          </div>

          <h2 className="font-heading font-bold text-[44px] leading-[50px] text-foreground mb-6">
            <span className="text-primary">Zeta Envisions</span> Itself As a Premier Solutions Provider for Modern Telecommunication Backbone Systems
          </h2>
          
          <p className="font-sans text-base leading-[26px] text-muted-foreground mb-8">
            Zeta Technologies delivers high-performance telecommunications backbone infrastructure, custom cloud virtualization clusters, and integrated machine intelligence layer solutions. We empower private enterprises, operators, and state agencies with fully custom digital Sovereignty.
          </p>

          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-[15px] leading-5 px-3.5 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            About Zeta
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Content - Feature Grid */}
        <div className="flex-1 border border-border rounded-2xl p-8">
          <p className="font-mono font-bold text-[10px] tracking-[2px] uppercase text-primary mb-6">
            Trusted by leading operators, enterprises and institutions
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-card rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[1px] uppercase text-muted-foreground">
                    {feature.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

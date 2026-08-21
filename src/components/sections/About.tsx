"use client";

import { Shield, Server, Globe, Radio } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "15+",
    subtitle: "Years of Trusted Infrastructure",
  },
  {
    icon: Server,
    title: "Licensed LDI Operator",
    subtitle: "Government Authorized",
  },
  {
    icon: Globe,
    title: "T-CLS Gateway",
    subtitle: "Cross-border Connectivity",
  },
  {
    icon: Radio,
    title: "Network Reach",
    subtitle: "Nationwide Coverage",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
            ABOUT ZETA
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="font-heading font-bold text-[40px] leading-[50px] text-foreground mb-6">
              <span className="text-primary">Zeta Envisions Itself</span> As a Premier Solutions Provider for Modern Telecommunication Backbone Systems
            </h2>
            
            <p className="font-sans text-base leading-[26px] text-muted-foreground mb-8">
              Zeta Technologies delivers high-performance telecommunications backbone systems,
              sovereign cloud platforms, and intelligent automation for enterprise, government, and telecom operators across Pakistan.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Discover More
            </a>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-heading font-bold text-2xl text-foreground mb-1">
                    {feature.title}
                  </span>
                  <span className="font-sans text-sm text-muted-foreground">
                    {feature.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

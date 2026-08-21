"use client";

import { Shield, Globe, Activity } from "lucide-react";

const partners = [
  { name: "Zong 4G", image: "/images/trustedby/partner1.png" },
  { name: "Telenor", image: "/images/trustedby/partner2.png" },
  { name: "REDtone", image: "/images/trustedby/partner3.png" },
  { name: "PTCL", image: "/images/trustedby/partner4.png" },
  { name: "CISCO", image: "/images/trustedby/partner5.png" },
  { name: "ACMETEL", image: "/images/trustedby/partner6.png" },
  { name: "Transworld", image: "/images/trustedby/partner7.png" },
];

const badges = [
  {
    icon: Shield,
    title: "Certified Data Center (PTCL Rated-3)",
    description: "Tier-3 certified infrastructure",
  },
  {
    icon: Globe,
    title: "100% Data Residency in Pakistan",
    description: "Your data never leaves the country",
  },
  {
    icon: Activity,
    title: "99.9% Guaranteed Availability",
    description: "Enterprise-grade uptime SLA",
  },
];

export function TrustedBy() {
  return (
    <section className="bg-card py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Tagline Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
              CUSTOMERS & PARTNERS
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-center text-foreground mb-5">
          Trusted across <span className="text-primary">Pakistan&apos;s enterprise</span> landscape.
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-center text-muted-foreground mb-12 mx-auto">
          From global technology partners to leading Pakistani institutions - banks, telcos, government, and enterprise - Zeta Technologies powers the workloads that move the country forward.
        </p>

        {/* Satisfied Partners Label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono font-bold text-[10px] leading-none tracking-[2px] uppercase text-accent whitespace-nowrap">
            SATISFIED PARTNERS
          </span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center flex-1 min-w-[120px]"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-[50px] w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-col md:flex-row items-center pt-8 border-t border-accent/40">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-foreground mb-0.5">
                Certified Data Center (PTCL Rated-3)
              </h4>
              <p className="font-sans text-xs text-muted-foreground">
                Tier-3 certified infrastructure
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border mx-6" />

          <div className="flex items-center gap-4 flex-1">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-foreground mb-0.5">
                100% Data Residency in Pakistan
              </h4>
              <p className="font-sans text-xs text-muted-foreground">
                Your data never leaves the country
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border mx-6" />

          <div className="flex items-center gap-4 flex-1">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-foreground mb-0.5">
                99.9% Guaranteed Availability
              </h4>
              <p className="font-sans text-xs text-muted-foreground">
                Enterprise-grade uptime SLA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

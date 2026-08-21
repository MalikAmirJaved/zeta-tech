"use client";

export function TrustedBy() {
  const logos = [
    { name: "Zong", width: "154px" },
    { name: "Telenor", width: "195px" },
    { name: "Jazz", width: "128px" },
    { name: "PTCL", width: "137px" },
    { name: "Ufone", width: "128px" },
    { name: "Zong 4G", width: "154px" },
  ];

  const badges = [
    "Certified Data Center (Tier III)",
    "100% Data Residency in Pakistan",
    "99.9% Guaranteed Availability",
  ];

  return (
    <section className="bg-card py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
            CUSTOMERS & PARTNERS
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-center text-foreground mb-5">
          Trusted across Pakistan&apos;s enterprise landscape.
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-center text-muted-foreground mb-10">
          From global technology partners to leading Pakistani institutions - banks, telcos, government, and enterprise - Zeta Technologies powers the workloads that move the country forward.
        </p>

        {/* Logos */}
        <div className="flex flex-col gap-10 mb-10">
          {/* Satisfied Partners Label */}
          <div className="flex items-center gap-4">
            <span className="font-mono font-bold text-[10px] tracking-[2px] uppercase text-accent whitespace-nowrap">
              SATISFIED PARTNERS
            </span>
            <div className="flex-1 h-px bg-accent/30" />
          </div>

          {/* Logo Grid */}
          <div className="flex flex-wrap items-center justify-center gap-x-[75px] gap-y-8">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                style={{ width: logo.width }}
              >
                <div className="h-[50px] flex items-center">
                  <span className="font-heading font-bold text-2xl text-muted-foreground/50">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-sans text-sm text-foreground">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

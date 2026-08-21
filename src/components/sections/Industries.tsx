"use client";

const industries = [
  {
    stat: "45%",
    label: "Market Growth",
    description: "Year-over-year growth in enterprise telecommunications services across Pakistan.",
  },
  {
    stat: "99.99%",
    label: "Guaranteed Uptime",
    description: "Industry-leading service level agreement for mission-critical infrastructure.",
  },
  {
    stat: "2.5M+",
    label: "Connected Endpoints",
    description: "Active endpoints connected across the sovereign network infrastructure.",
  },
];

export function Industries() {
  return (
    <section className="bg-background py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
            ENTERPRISE
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground mb-5">
          Different industries. Different challenges.<br />
          Same trusted partner.
        </h2>

        {/* Subheading */}
        <p className="font-sans text-base leading-[21px] text-muted-foreground mb-12 max-w-[600px] mx-auto">
          From banks to telcos to government, Zeta delivers infrastructure that powers Pakistan&apos;s digital economy.
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((item) => (
            <div
              key={item.stat}
              className="bg-dark rounded-2xl p-8 text-center"
            >
              <span className="font-heading font-bold text-6xl text-white block mb-2">
                {item.stat}
              </span>
              <span className="font-heading font-semibold text-lg text-primary block mb-3">
                {item.label}
              </span>
              <p className="font-sans text-sm text-dark-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

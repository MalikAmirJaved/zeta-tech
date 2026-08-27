"use client";

const capabilities = [
  {
    title: "LICENSED OPERATOR",
    description:
      "Formally holding complete LDI & CVAS certifications to guarantee regulatory compliance.",
  },
  {
    title: "SOVEREIGN INFRASTRUCTURE",
    description:
      "Strategically located datacenters ensuring your data assets remain completely localized.",
  },
  {
    title: "RESILIENT NETWORKS",
    description:
      "Engineered path redundancies designed to minimize low-latency routing failures.",
  },
  {
    title: "15+ YEARS EXPERIENCE",
    description:
      "Deep technical heritage power-delivering reliable regional telecommunications structures.",
  },
  {
    title: "INTEGRATED CAPABILITIES",
    description:
      "Synthesizing robust transit, local virtualization clusters, and deep threat analytics.",
  },
  {
    title: "ENTERPRISE SUPPORT",
    description:
      "Dedicated 24/7 network operations center personnel safeguarding core connectivity.",
  },
];

function getCellBorderClass(index: number): string {
  const row = Math.floor(index / 3);
  const col = index % 3;

  if (row === 0) {
    if (col < 2) return "border-r border-b border-border";
    return "border-b border-border";
  } else {
    if (col < 2) return "border-r border-border";
    return "";
  }
}

export function Proof() {
  return (
    <section className="bg-white py-[120px] px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Centered Headings */}
        <div className="flex flex-col items-center gap-4 mb-14">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
              WHY ZETA
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground text-center">
            The Proof Behind The Platform
          </h2>
        </div>

        {/* Grid Wrapper */}
        <div className="border border-border rounded-xl overflow-hidden">
          {/* Grid Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className={`group flex flex-col gap-3 p-8 ${getCellBorderClass(index)} hover:bg-primary transition-colors`}
              >
                {/* Title Row */}
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors" />
                  <h3 className="font-heading font-bold text-[13px] leading-[17px] tracking-[1px] text-dark uppercase group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm leading-[22px] text-muted-foreground group-hover:text-white transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

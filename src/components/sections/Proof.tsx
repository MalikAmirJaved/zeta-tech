"use client";

const stats = [
  {
    title: "LICENSED OPERATOR",
    description: "Government-authorized telecommunications infrastructure operator",
  },
  {
    title: "SOVEREIGN INFRASTRUCTURE",
    description: "100% data residency within Pakistan's national borders",
  },
  {
    title: "DEDICATED NETWORK",
    description: "Private, high-performance network backbone",
  },
  {
    title: "24/7 MONITORING",
    description: "Round-the-clock network operations center",
  },
  {
    title: "ENTERPRISE GRADE",
    description: "Mission-critical reliability for enterprise workloads",
  },
  {
    title: "COMPLIANCE SUPPORT",
    description: "Full regulatory compliance and data protection",
  },
];

export function Proof() {
  return (
    <section className="bg-zeta-page-bg py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zeta-red/20 bg-zeta-red/[0.0588235] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-zeta-red" />
          <span className="text-zeta-red font-heading font-bold text-[11px] tracking-[3px] uppercase">
            WHY ZETA
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-zeta-text mb-12">
          The Proof Behind The Platform
        </h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col p-6 rounded-2xl bg-zeta-white border border-zeta-border"
            >
              <h3 className="font-mono font-bold text-[10px] tracking-[2px] text-zeta-red uppercase mb-3">
                {stat.title}
              </h3>
              <p className="font-sans text-sm text-zeta-text-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

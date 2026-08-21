"use client";

import { ShieldCheck, Server, Building2, Cpu, Activity } from "lucide-react";

const stackLayers = [
  {
    step: "01",
    title: "Connectivity Pipeline",
    badge: { icon: "shield", text: "99.9% Uptime" },
    description:
      "Fiber-leased pipelines and sovereign border gateway connections with uncompromised traffic boundary control.",
    metrics: [
      { label: "Latency", value: "< 2ms" },
      { label: "Redundancy", value: "N+2" },
      { label: "Security", value: "AES-256" },
    ],
  },
  {
    step: "02",
    title: "Core Cloud Layer",
    badge: { icon: "server", text: "500+ Nodes" },
    description:
      "Virtualized, dedicated host nodes configured inside redundant data zones for extreme performance stability.",
    chart: { label: "Performance stability", value: "98%" },
  },
  {
    step: "03",
    title: "Data Center Strata",
    badge: { icon: "building", text: "Tier 4 Facility" },
    description:
      "Pakistan-regionalized secure operational hosting compounds configured with continuous environmental matrices.",
    progress: { label: "Sovereignty", value: "100%" },
  },
];

const branchCards = [
  {
    icon: "cpu",
    stat: { label: "Automation", value: "4.2×" },
    title: "Intelligent Automation",
    description:
      "System-level task tooling engines built for enterprise workflow security and repeatable reliability.",
    chart: { label: "Automation efficiency", value: "92%" },
  },
  {
    icon: "activity",
    stat: { label: "Telemetry", value: "Real-time" },
    title: "Network Intelligence",
    description:
      "Sub-level security telemetric analysis predicting downtime vectors instantly across the sovereign stack.",
    progress: { label: "Predictive accuracy", value: "96%" },
  },
];

function BadgeIcon({ type }: { type: string }) {
  switch (type) {
    case "shield":
      return <ShieldCheck className="w-3.5 h-3.5 text-primary" />;
    case "server":
      return <Server className="w-3.5 h-3.5 text-primary" />;
    case "building":
      return <Building2 className="w-3.5 h-3.5 text-primary" />;
    case "cpu":
      return <Cpu className="w-5.5 h-5.5 text-primary" />;
    case "activity":
      return <Activity className="w-5.5 h-5.5 text-primary" />;
    default:
      return null;
  }
}

function MiniChart({ heights }: { heights: number[] }) {
  return (
    <div className="flex items-end gap-1.5 w-full h-[18px]">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-md ${
            i === 3 || i === 5 ? "bg-primary" : "bg-[#FFE9E5]"
          }`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-primary rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function Stack() {
  return (
    <section className="relative bg-white py-[120px] px-6 lg:px-[144px] overflow-hidden">
      {/* Grid Background */}

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Centered Headings */}
        <div className="flex flex-col items-center gap-4 mb-[50px]">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-heading font-bold text-[11px] tracking-[3px] uppercase">
              CORE ECOSYSTEM
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-[44px] leading-[57px] text-foreground text-center max-w-[711px]">
            The Sovereign Intelligence Stack
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-lg leading-[23px] text-muted-foreground text-center max-w-[640px]">
            Unifying core telecommunication layers and machine intelligence
            into a single secure ecosystem.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Stack Column */}
          <div className="flex-[1.7] flex flex-col gap-4">
            {stackLayers.map((layer, index) => (
              <div key={index}>
                {/* Stack Layer Card */}
                <div className="bg-white border border-border rounded-[18px] shadow-[0px_18px_40px_-18px_rgba(0,0,0,0.07),0px_2px_10px_-4px_rgba(0,0,0,0.04)] p-5">
                  <div className="flex flex-col gap-3.5">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Step Marker */}
                        <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-white font-heading font-extrabold text-sm leading-[18px]">
                            {layer.step}
                          </span>
                        </div>
                        {/* Title */}
                        <h3 className="font-heading font-bold text-[22px] leading-[29px] text-foreground">
                          {layer.title}
                        </h3>
                      </div>
                      {/* Badge */}
                      <div className="flex items-center gap-2 px-2.5 py-2 rounded-full bg-[#FFE9E5]">
                        <BadgeIcon type={layer.badge.icon} />
                        <span className="text-primary font-heading font-extrabold text-[13px] leading-[17px]">
                          {layer.badge.text}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm leading-[22px] text-muted-foreground">
                      {layer.description}
                    </p>

                    {/* Metrics */}
                    {layer.metrics && (
                      <div className="flex gap-3">
                        {layer.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex-1 flex flex-col gap-1 p-3 bg-background border border-border rounded-[14px]"
                          >
                            <span className="font-heading font-bold text-xs leading-[16px] text-muted-foreground">
                              {metric.label}
                            </span>
                            <span className="font-heading font-extrabold text-base leading-[21px] text-foreground">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Mini Chart */}
                    {layer.chart && (
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-xs leading-[16px] text-muted-foreground">
                            {layer.chart.label}
                          </span>
                          <span className="font-heading font-extrabold text-sm leading-[18px] text-dark">
                            {layer.chart.value}
                          </span>
                        </div>
                        <MiniChart heights={[18, 22, 20, 26, 24, 28, 22]} />
                      </div>
                    )}

                    {/* Progress Bar */}
                    {layer.progress && (
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-xs leading-[16px] text-muted-foreground">
                            {layer.progress.label}
                          </span>
                          <span className="font-heading font-extrabold text-sm leading-[18px] text-dark">
                            {layer.progress.value}
                          </span>
                        </div>
                        <ProgressBar value={100} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector */}
                {index < stackLayers.length - 1 && (
                  <div className="flex items-center gap-2.5 py-2">
                    <div className="w-px h-7 bg-primary rounded" />
                    <div className="flex-1 h-px bg-border rounded" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Branching Column */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Branching Header */}
            <div className="flex flex-col gap-1.5 pb-4 border-b border-border">
              <span className="font-heading font-extrabold text-xs leading-[16px] tracking-[3px] text-muted-foreground uppercase">
                BRANCHING INTO SPECIALIZED SOLUTIONS
              </span>
              <h3 className="font-heading font-bold text-2xl leading-[31px] text-foreground">
                Built on the Sovereign Stack
              </h3>
            </div>

            {/* Branch Cards */}
            {branchCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-[18px] shadow-[0px_2px_10px_-4px_rgba(0,0,0,0.04)] p-5"
              >
                <div className="flex flex-col gap-3.5">
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-[14px] bg-[#FFE9E5] flex items-center justify-center">
                      <BadgeIcon type={card.icon} />
                    </div>
                    {/* Stat Box */}
                    <div className="flex flex-col gap-0.5 px-2.5 py-2 bg-background border border-border rounded-xl">
                      <span className="font-heading font-bold text-xs leading-[16px] text-muted-foreground">
                        {card.stat.label}
                      </span>
                      <span className="font-heading font-extrabold text-base leading-[21px] text-dark">
                        {card.stat.value}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-heading font-bold text-xl leading-[26px] text-foreground">
                      {card.title}
                    </h4>
                    <p className="font-sans text-sm leading-[22px] text-muted-foreground">
                      {card.description}
                    </p>
                  </div>

                  {/* Mini Chart */}
                  {card.chart && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs leading-[16px] text-muted-foreground">
                          {card.chart.label}
                        </span>
                        <span className="font-heading font-extrabold text-sm leading-[18px] text-dark">
                          {card.chart.value}
                        </span>
                      </div>
                      <MiniChart heights={[18, 22, 20, 26, 24, 28, 22]} />
                    </div>
                  )}

                  {/* Progress Bar */}
                  {card.progress && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs leading-[16px] text-muted-foreground">
                          {card.progress.label}
                        </span>
                        <span className="font-heading font-extrabold text-sm leading-[18px] text-dark">
                          {card.progress.value}
                        </span>
                      </div>
                      <ProgressBar value={96} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative  overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herobackground.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-zeta-dark/70" />
      
      <div className="relative z-10 max-w-[1728px] mx-auto px-6 lg:px-[144px] h-full flex items-center py-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-[60px] w-full">
          {/* Hero Left Content */}
          <div className="flex-1 max-w-[800px]">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.0588235] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-zeta-white" />
              <span className="text-zeta-white font-heading font-bold text-[11px] tracking-[3px] uppercase">
                SOVEREIGN INFRASTRUCTURE · PAKISTAN
              </span>
            </div>

            {/* Headlines */}
            <div className="flex flex-col gap-1 mb-7">
              <h1 className="font-heading font-bold text-[84px] leading-[80px] tracking-[-0.02em] text-zeta-white">
                Powering
              </h1>
              <h1 className="font-heading font-bold text-[84px] leading-[80px] tracking-[-0.02em] text-zeta-white">
                Sovereign Digital
              </h1>
              <h1 className="font-heading font-bold text-[84px] leading-[80px] tracking-[-0.02em] text-zeta-red">
                Infrastructure
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-zeta-gray font-sans text-[17px] leading-[26px] max-w-[520px] mb-7">
              Zeta Technologies delivers high-performance telecommunications backbone systems,
              sovereign cloud platforms, and intelligent automation across Pakistan&apos;s enterprise landscape.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="bg-zeta-red text-zeta-white font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:bg-red-700 transition-colors"
              >
                Talk to Zeta
              </a>
              <a
                href="#about"
                className="border border-white/70 text-zeta-white font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                About Zeta
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Hero Right - NOC Dashboard */}
          <div className="w-full max-w-[580px] bg-zeta-darker/90 backdrop-blur-sm border border-[rgba(237,0,27,0.41)] rounded-2xl p-6 shadow-[2px_0px_9.4px_10px_rgba(237,0,27,0.11)]">
            {/* NOC Top Bar */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-zeta-green" />
                <span className="font-mono font-bold text-xs text-zeta-white uppercase">
                  NETWORK OPERATIONS
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zeta-green" />
                <span className="font-mono text-[10px] text-zeta-gray">LIVE STREAM OK</span>
              </div>
            </div>

            {/* NOC Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Uptime Tile */}
              <div className="bg-zeta-dark border border-zeta-border rounded-lg p-4">
                <span className="font-mono text-[10px] text-zeta-gray block mb-1">UPTIME (SLA)</span>
                <span className="font-mono font-bold text-xl text-zeta-green">99.97%</span>
              </div>

              {/* Capacity Tile */}
              <div className="bg-zeta-dark border border-zeta-border rounded-lg p-4">
                <span className="font-mono text-[10px] text-zeta-gray block mb-1">CONNECTED CAPACITY</span>
                <span className="font-mono font-bold text-xl text-zeta-white">1.2 TBPS</span>
              </div>

              {/* Gateways Tile */}
              <div className="bg-zeta-dark border border-zeta-border rounded-lg p-4">
                <span className="font-mono text-[10px] text-zeta-gray block mb-1">ACTIVE GATEWAYS</span>
                <span className="font-mono font-bold text-xl text-zeta-white">4 / 4 SECURE</span>
              </div>

              {/* Threat Level Tile */}
              <div className="bg-zeta-dark border border-zeta-border rounded-lg p-4">
                <span className="font-mono text-[10px] text-zeta-gray block mb-1">THREAT LEVEL</span>
                <span className="font-mono font-bold text-xl text-zeta-red">LOW / STABLE</span>
              </div>
            </div>

            {/* Telemetry Chart */}
            <div className="bg-zeta-dark border border-zeta-border rounded-lg p-4 mb-5">
              <span className="font-mono text-[10px] text-zeta-gray block mb-2">REAL-TIME TRAFFIC SPECTRA</span>
              <div className="relative h-[60px]">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="border-t border-zeta-border h-0" />
                  <div className="border-t border-zeta-border h-0" />
                  <div className="border-t border-zeta-border h-0" />
                  <div className="border-t border-zeta-border h-0" />
                </div>
                {/* Waveform SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 60" preserveAspectRatio="none">
                  <path
                    d="M0 30 Q25 10 50 30 T100 30 T150 30 T200 30 T250 30 T300 30 T350 30 T400 30 T450 30 T500 30"
                    fill="none"
                    stroke="var(--zeta-red)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* Status Rows */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zeta-red" />
                  <span className="font-mono text-[11px] text-zeta-white">T-CLS Border Gateway</span>
                </div>
                <span className="font-mono text-[11px] text-zeta-green">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zeta-gray" />
                  <span className="font-mono text-[11px] text-zeta-gray">LDI Operations</span>
                </div>
                <span className="font-mono text-[11px] text-zeta-gray">NOMINAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

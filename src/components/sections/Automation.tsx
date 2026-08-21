"use client";

import { ArrowRight } from "lucide-react";

export function Automation() {
  return (
    <section className="relative bg-white py-30 px-6 lg:px-[144px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        {/* Icons Arc Section */}
        <div className="relative h-[380px] mb-8">
          {/* Background Arc Image */}
          <img
            src="/images/automationback.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[1400px] max-w-none h-auto pointer-events-none select-none"
          />

          {/* Icons Container */}
          <div className="relative flex items-start justify-center h-full">
            {/* Connectivity */}
            <div className="absolute left-[3%] flex items-start">
              <div className="flex flex-col items-center mt-[82px]">
                <div className="w-[72px] h-[72px] rounded-full bg-white border border-red-100 flex items-center justify-center shadow-sm">
                  <img src="/images/wifi.svg" alt="Connectivity" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs font-semibold text-neutral-900 text-center">Connectivity</span>
              </div>
            </div>

            {/* Network Intelligence */}
            <div className="absolute left-[15%] flex items-start">
              <div className="flex flex-col items-center mt-[48px]">
                <div className="w-[72px] h-[72px] rounded-full bg-white border border-red-100 flex items-center justify-center shadow-sm">
                  <img src="/images/Vector (4).svg" alt="Network Intelligence" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs font-semibold text-neutral-900 text-center">Network Intelligence</span>
              </div>
            </div>

            {/* Cloud Computing */}
            <div className="absolute left-[27%] flex items-start">
              <div className="flex flex-col items-center mt-[36px]">
                <div className="w-[72px] h-[72px] rounded-full bg-white border border-red-100 flex items-center justify-center shadow-sm">
                  <img src="/images/cloud.svg" alt="Cloud Computing" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs font-semibold text-neutral-900 text-center">Cloud Computing</span>
              </div>
            </div>

            {/* Center: Intelligent Automation */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                  <img src="/images/Vector (5).svg" alt="Intelligent Automation" className="w-10 h-10" />
                </div>
                <span className="mt-3 font-sans text-sm font-semibold text-red-600 text-center">Intelligent Automation</span>
              </div>
            </div>

            {/* Wholesale Voice */}
            <div className="absolute right-[27%] flex items-start">
              <div className="flex flex-col items-center mt-[36px]">
                <div className="w-[72px] h-[72px] rounded-full bg-white border border-red-100 flex items-center justify-center shadow-sm">
                  <img src="/images/Vector (6).svg" alt="Wholesale Voice" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs font-semibold text-neutral-900 text-center">Wholesale Voice</span>
              </div>
            </div>

            {/* A2P Messaging */}
            <div className="absolute right-[15%] flex items-start">
              <div className="flex flex-col items-center mt-[48px]">
                <div className="w-[72px] h-[72px] rounded-full bg-white border border-red-100 flex items-center justify-center shadow-sm">
                  <img src="/images/Vector (7).svg" alt="A2P Messaging" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs font-semibold text-neutral-900 text-center">A2P Messaging</span>
              </div>
            </div>

            {/* CPaaS */}
            <div className="absolute right-[3%] flex items-start">
              <div className="flex flex-col items-center mt-[82px]">
                <div className="w-[72px] h-[72px] rounded-full bg-white border border-red-100 flex items-center justify-center shadow-sm">
                  <img src="/images/code.svg" alt="CPaaS" className="w-9 h-9" />
                </div>
                <span className="mt-3 font-sans text-xs font-semibold text-neutral-900 text-center">CPaaS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative text-center">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-100 bg-red-50 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="text-red-600 font-heading font-bold text-[11px] tracking-[3px] uppercase">
              OUR CAPABILITIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-[44px] leading-[57px] text-center text-neutral-900 mb-5">
            Intelligent Automation
          </h2>

          {/* Subheading */}
          <p className="font-sans text-base leading-[21px] text-center text-neutral-500 max-w-[600px] mx-auto mb-8">
            Optimising operational tasks & infrastructure processes using secure, low-latency AI pipelines.
          </p>

          {/* CTA Button */}
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
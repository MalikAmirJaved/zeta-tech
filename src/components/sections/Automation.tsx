"use client";

import { useState } from "react";
import {
  ArrowRight,
  Wifi,
  Activity,
  Cloud,
  Cpu,
  Phone,
  MessageSquare,
  Code,
  type LucideIcon,
} from "lucide-react";

type CapabilityItem = {
  key: string;
  label: string;
  icon: LucideIcon;
  header: string;
  des: string;
};

const ITEMS: CapabilityItem[] = [
  {
    key: "connectivity",
    label: "Connectivity",
    icon: Wifi,
    header: "Connectivity",
    des: "Secure global fibers, IP transit, LDI operations, and private networks engineered for maximum uptime and resilience.",
  },
  {
    key: "network-intelligence",
    label: "Network Intelligence",
    icon: Activity,
    header: "Network Intelligence",
    des: "Deep packet telemetry, proactive traffic shaping, diagnostics, and machine-learning threat detection networks.",
  },
  {
    key: "cloud-computing",
    label: "Cloud Computing",
    icon: Cloud,
    header: "Cloud Computing",
    des: "Sovereign data centers, cloud infrastructure hosts, intelligent orchestrators, and automated virtualization models.",
  },
  {
    key: "intelligent-automation",
    label: "Intelligent Automation",
    icon: Cpu,
    header: "Intelligent Automation",
    des: "Optimising operational tasks & infrastructure processes using secure, low-latency AI pipelines.",
  },
  {
    key: "wholesale-voice",
    label: "Wholesale Voice",
    icon: Phone,
    header: "Wholesale Voice",
    des: "Enterprise scale termination & originations.",
  },
  {
    key: "a2p-messaging",
    label: "A2P Messaging",
    icon: MessageSquare,
    header: "A2P Messaging",
    des: "Application communication relays and security APIs.",
  },
  {
    key: "cpaas",
    label: "CPaaS",
    icon: Code,
    header: "CPaaS",
    des: "Programmable developer APIs for voice, video & messaging.",
  },
];

// Index of "Intelligent Automation" in ITEMS — also the default selection
// and the middle slot of the arc.
const DEFAULT_SELECTED = 3;
const TOTAL = ITEMS.length;

// 7 evenly spaced slot positions across the arc (left %), all fully
// visible, with a smooth, evenly-stepped bow (top px). Slot 3 is always
// the center slot.
const SLOT_POSITIONS = [
  { left: 2, top: 90 },
  { left: 18, top: 60 },
  { left: 34, top: 30 },
  { left: 50, top: 0 },
  { left: 66, top: 30 },
  { left: 82, top: 60 },
  { left: 98, top: 90 },
];
const CENTER_SLOT = 3;

export function Automation() {
  const [selected, setSelected] = useState(DEFAULT_SELECTED);
  const active = ITEMS[selected];

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
            {ITEMS.map((item, i) => {
              const slotIndex = (i - selected + CENTER_SLOT + TOTAL) % TOTAL;
              const pos = SLOT_POSITIONS[slotIndex];
              const isCenter = slotIndex === CENTER_SLOT;
              const Icon = item.icon;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={isCenter}
                  className="absolute flex flex-col items-center cursor-pointer transition-all duration-700 ease-in-out focus:outline-none"
                  style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className={`rounded-full border flex items-center justify-center transition-all duration-700 ease-in-out ${
                      isCenter
                        ? "w-20 h-20 bg-red-600 border-red-600 shadow-lg"
                        : "w-[72px] h-[72px] bg-white border-red-100 shadow-sm hover:border-red-300"
                    }`}
                  >
                    <Icon
                      strokeWidth={1}
                      className={`transition-all duration-700 ease-in-out ${
                        isCenter ? "w-10 h-10 text-white" : "w-9 h-9 text-red-600"
                      }`}
                    />
                  </div>
                  <span
                    className={`mt-3 font-sans font-semibold text-center transition-all duration-700 ease-in-out ${
                      isCenter ? "text-sm text-red-600" : "text-xs text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative bottom-40 text-center ">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-100 bg-red-50 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="text-red-600 font-heading font-semibold text-[11px] tracking-[3px] uppercase">
              OUR CAPABILITIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-[44px] leading-[57px] text-center text-neutral-900 mb-5 transition-all duration-300">
            {active.header}
          </h2>

          {/* Subheading */}
          <p className="font-sans text-base leading-[21px] text-center text-neutral-500 max-w-[600px] mx-auto mb-8 transition-all duration-300">
            {active.des}
          </p>

          {/* CTA Button */}
          <a
            href="#services"
            className="group inline-flex items-center gap-2 bg-red-600 text-white font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px]"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-30" />
          </a>
        </div>
      </div>
    </section>
  );
}
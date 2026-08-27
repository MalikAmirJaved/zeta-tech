"use client";

import { useState, useRef } from "react";
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

const DEFAULT_SELECTED = 3;
const TOTAL = ITEMS.length;
const CENTER = 3;

/*
 * ============================================
 * LAYOUT SETTINGS
 * ============================================
 */

/*
 * Actual empty space between icon circles.
 *
 * Example:
 *
 *   (72px)       80px       (72px)
 *  ┌──────┐                 ┌──────┐
 *  │ ICON │                 │ ICON │
 *  └──────┘                 └──────┘
 *           ← 80px →
 */
const ICON_GAP = 80;

/*
 * Top position of the icon circles.
 */
const TOP_MARGIN = 30;

/*
 * How much the outside icons drop compared
 * with the center icon.
 *
 * 0  = completely straight
 * 40 = very shallow curve
 * 70 = current curve
 * 100 = deeper curve
 */
const CURVE_DEPTH = 70;

/*
 * Circle sizes.
 */
const ACTIVE_SIZE = 80;
const INACTIVE_SIZE = 72;

/*
 * Since the active circle is 80px and inactive
 * circles are 72px, we use the largest size
 * when calculating slot spacing.
 *
 * 80px circle + 80px gap = 160px
 */
const SLOT_SPACING = ACTIVE_SIZE + ICON_GAP;

export function Automation() {
  const [selected, setSelected] = useState(DEFAULT_SELECTED);

  /*
   * X positions of each item.
   *
   * Initially:
   *
   * item 0 = -480
   * item 1 = -320
   * item 2 = -160
   * item 3 =    0
   * item 4 =  160
   * item 5 =  320
   * item 6 =  480
   *
   * This gives 80px actual space between
   * the 80px slot containers.
   */
  const positionsRef = useRef<number[]>(
    ITEMS.map((_, i) => {
      return (i - DEFAULT_SELECTED) * SLOT_SPACING;
    })
  );

  /*
   * Force re-render after changing positionsRef.
   */
  const [, setTick] = useState(0);

  const active = ITEMS[selected];

  const handleSelect = (index: number) => {
    if (index === selected) return;

    let steps = index - selected;

    /*
     * Always use the shortest direction.
     *
     * Example:
     * Going from item 0 to item 6 should move
     * one step backwards instead of six steps forward.
     */
    if (steps > TOTAL / 2) {
      steps -= TOTAL;
    }

    if (steps < -TOTAL / 2) {
      steps += TOTAL;
    }

    /*
     * Calculate new X position for every item.
     */
    const newPositions = positionsRef.current.map((_, i) => {
      let relativePosition = i - index;

      /*
       * Circular wrapping.
       */
      if (relativePosition > TOTAL / 2) {
        relativePosition -= TOTAL;
      }

      if (relativePosition < -TOTAL / 2) {
        relativePosition += TOTAL;
      }

      return relativePosition * SLOT_SPACING;
    });

    positionsRef.current = newPositions;

    setSelected(index);
    setTick((t) => t + 1);
  };

  return (
    <section className="relative bg-white py-30 px-6 lg:px-[144px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">

        {/* ============================================
            ICONS ARC SECTION
        ============================================ */}

        <div className="relative h-[380px] mb-8">

          {/* Background Arc Image */}
          <img
            src="/images/automationback.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[1400px] max-w-none h-auto pointer-events-none select-none"
          />

          {/* ============================================
              ICON PIVOT
          ============================================ */}

          <div
            className="absolute left-1/2 top-0 w-0 h-0"
            style={{
              transform: `translateX(-50%)`,
            }}
          >
            {ITEMS.map((item, i) => {
              const x = positionsRef.current[i];

              /*
               * Distance from center.
               *
               * Center:
               * 0
               *
               * One position away:
               * 1
               *
               * Two positions away:
               * 2
               *
               * etc.
               */
              const distanceFromCenter =
                Math.abs(x) / SLOT_SPACING;

              /*
               * Create the gentle arc.
               *
               * Center:
               * 30px from top
               *
               * Outer items:
               * progressively lower.
               */
              const y =
                TOP_MARGIN +
                (distanceFromCenter / CENTER) * CURVE_DEPTH;

              /*
               * The item at X = 0 is the active item.
               */
              const isCenter = Math.abs(x) < 1;

              const Icon = item.icon;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleSelect(i)}
                  aria-pressed={isCenter}
                  className="absolute flex flex-col items-center cursor-pointer focus:outline-none"
                  style={{
                    /*
                     * Horizontal position.
                     */
                    left: `${x}px`,

                    /*
                     * Vertical position.
                     */
                    top: `${y}px`,

                    /*
                     * The button itself is 88px wide.
                     */
                    width: 88,

                    /*
                     * Center the button around its X position.
                     */
                    marginLeft: -44,

                    /*
                     * Smooth animation.
                     */
                    transition:
                      "left 0.85s cubic-bezier(0.33, 1.2, 0.64, 1), top 0.85s cubic-bezier(0.33, 1.2, 0.64, 1)",
                  }}
                >
                  {/* ============================================
                      ICON CIRCLE
                  ============================================ */}

                  <div
                    className={`rounded-full border flex items-center justify-center transition-all duration-500 ease-out ${
                      isCenter
                        ? "w-20 h-20 bg-red-600 border-red-600 shadow-lg"
                        : "w-[72px] h-[72px] bg-white border-red-100 shadow-sm hover:border-red-300"
                    }`}
                  >
                    <Icon
                      strokeWidth={1}
                      className={`transition-all duration-500 ease-out ${
                        isCenter
                          ? "w-10 h-10 text-white"
                          : "w-9 h-9 text-red-600"
                      }`}
                    />
                  </div>

                  {/* ============================================
                      LABEL
                  ============================================ */}

                  <span
                    className={`mt-3 font-sans font-semibold text-center whitespace-nowrap transition-all duration-500 ease-out ${
                      isCenter
                        ? "text-sm text-red-600"
                        : "text-xs text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================
            CONTENT SECTION
        ============================================ */}

        <div className="relative bottom-40 text-center">

          {/* Badge */}
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

          {/* Description */}
          <p className="font-sans text-base leading-[21px] text-center text-neutral-500 max-w-[600px] mx-auto mb-8 transition-all duration-300">
            {active.des}
          </p>

          {/* Button */}
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
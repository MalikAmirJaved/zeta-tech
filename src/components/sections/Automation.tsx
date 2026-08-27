"use client";

import { useState, useRef, useCallback } from "react";
import type { CSSProperties } from "react";
import svgPaths from "@/components/imports/svg-c3w3uvuogl";

// ─── Arc layout ───────────────────────────────────────────────────────────────
// Center-X of each badge in a 1200 px container.
// Slot 3 is the active position. Slots -2…8 cover off-screen buffers.
const ARC: { x: number; y: number }[] = [
  { x: -290, y: 150 }, // slot -2
  { x:  -90, y: 120 }, // slot -1  (off-screen left)
  { x:   55, y:  90 }, // slot  0
  { x:  210, y:  60 }, // slot  1
  { x:  410, y:  30 }, // slot  2
  { x:  600, y:   0 }, // slot  3  (active center)
  { x:  790, y:  30 }, // slot  4
  { x:  990, y:  60 }, // slot  5
  { x: 1145, y:  90 }, // slot  6
  { x: 1290, y: 120 }, // slot  7  (off-screen right)
  { x: 1490, y: 150 }, // slot  8
];

function arcPos(slot: number) {
  const idx = slot + 2;
  return ARC[Math.max(0, Math.min(idx, ARC.length - 1))];
}

// ─── Services ────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    name: "Connectivity",
    icon: "wifi",
    description:
      "High-performance global network access with enterprise SLAs and fully redundant edge infrastructure.",
  },
  {
    name: "Network Intelligence",
    icon: "activity",
    description:
      "AI-driven network analytics delivering real-time visibility and predictive performance optimisation.",
  },
  {
    name: "Cloud Computing",
    icon: "cloud",
    description:
      "Scalable cloud infrastructure and managed services powering mission-critical workloads worldwide.",
  },
  {
    name: "Intelligent Automation",
    icon: "cpu",
    description:
      "Optimising operational tasks & infrastructure processes using secure, low-latency AI pipelines.",
  },
  {
    name: "Wholesale Voice",
    icon: "phone",
    description:
      "Carrier-grade voice termination with global reach, HD audio quality, and transparent routing.",
  },
  {
    name: "A2P Messaging",
    icon: "message-square",
    description:
      "High-throughput application-to-person messaging with guaranteed delivery and compliance controls.",
  },
  {
    name: "CPaaS",
    icon: "code",
    description:
      "Communication APIs and SDKs to embed voice, video, and messaging into your applications.",
  },
];

const N = SERVICES.length; // 7
const ACTIVE_SLOT = 3;

function slotOf(svcIdx: number, activeIdx: number): number {
  return ((svcIdx - activeIdx + ACTIVE_SLOT) % N + N) % N;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ─── Icon components (stroke="currentColor" for smooth color transitions) ────
function ServiceIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "wifi":
      return (
        <svg fill="none" height="32" viewBox="0 0 32 32" width="32">
          <path d={svgPaths.p24cfc00} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "activity":
      return (
        <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
          <path d={svgPaths.pde0d9c0} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "cloud":
      return (
        <svg fill="none" height="36" viewBox="0 0 36 36" width="36">
          <path d={svgPaths.p30c10400} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "cpu":
      return (
        <svg fill="none" height="40" viewBox="0 0 40 40" width="40">
          <path d={svgPaths.p1f25ab80} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "phone":
      return (
        <svg fill="none" height="36" viewBox="0 0 36 36" width="36">
          <path d={svgPaths.pbe40980} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "message-square":
      return (
        <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
          <path d={svgPaths.p17a69e00} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "code":
      return (
        <svg fill="none" height="32" viewBox="0 0 32 32" width="32">
          <path d={svgPaths.p19493fc0} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}

// ─── Animation state ─────────────────────────────────────────────────────────
type AnimPhase = "idle" | "p1" | "p2" | "p3" | "p4a" | "p4b";

interface AnimData {
  phase: AnimPhase;
  fromIdx: number;
  toIdx: number;
  // Services that wrap around: maps svc index → override slot during p1-p3
  exitSlots: Map<number, number>;
  // Maps svc index → teleport slot at p4a (opposite off-screen side)
  entrySlots: Map<number, number>;
}

type ContentAnim = "visible" | "exiting" | "entering";

// ─── Main component ───────────────────────────────────────────────────────────
export function Automation() {
  const [activeIdx, setActiveIdx] = useState(3); // Intelligent Automation
  const [displayIdx, setDisplayIdx] = useState(3); // drives content area text
  const [anim, setAnim] = useState<AnimData>({
    phase: "idle",
    fromIdx: 3,
    toIdx: 3,
    exitSlots: new Map(),
    entrySlots: new Map(),
  });
  const [contentAnim, setContentAnim] = useState<ContentAnim>("visible");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // ── Position computation ──────────────────────────────────────────────────
  function getBadgePos(svcIdx: number): { left: string; top: string; transition: string } {
    const { phase, fromIdx, toIdx, exitSlots, entrySlots } = anim;

    if (phase === "idle") {
      const { x, y } = arcPos(slotOf(svcIdx, activeIdx));
      return { left: `${x}px`, top: `${y}px`, transition: "none" };
    }

    if (phase === "p4a") {
      // Teleport wrapping services to entry side; no transition so the jump is invisible
      const overrideSlot = entrySlots.get(svcIdx);
      const { x, y } =
        overrideSlot !== undefined ? arcPos(overrideSlot) : arcPos(slotOf(svcIdx, toIdx));
      return { left: `${x}px`, top: `${y}px`, transition: "none" };
    }

    if (phase === "p4b") {
      // Settle: animate to final positions
      const { x, y } = arcPos(slotOf(svcIdx, toIdx));
      return { left: `${x}px`, top: `${y}px`, transition: "left 198ms ease-out, top 198ms ease-out" };
    }

    // p1 / p2 / p3 — keyframe interpolation
    const fromSlot = slotOf(svcIdx, fromIdx);
    const finalSlot = slotOf(svcIdx, toIdx);
    const exitOverride = exitSlots.get(svcIdx);
    const toSlot = exitOverride !== undefined ? exitOverride : finalSlot;

    const fp = arcPos(fromSlot);
    const tp = arcPos(toSlot);

    let t: number, dur: number, ease: string;
    if (phase === "p1") {
      t = 0.25; dur = 160; ease = "ease-out";
    } else if (phase === "p2") {
      t = 0.75; dur = 200; ease = "cubic-bezier(0.45,0,0.55,1)";
    } else {
      t = 1.0;  dur = 160; ease = "ease-out";
    }

    return {
      left: `${lerp(fp.x, tp.x, t)}px`,
      top:  `${lerp(fp.y, tp.y, t)}px`,
      transition: `left ${dur}ms ${ease}, top ${dur}ms ${ease}`,
    };
  }

  // During animation the incoming service immediately takes the "active" visual style
  function isVisuallyActive(svcIdx: number): boolean {
    return anim.phase === "idle" ? svcIdx === activeIdx : svcIdx === anim.toIdx;
  }

  // ── Click handler ─────────────────────────────────────────────────────────
  const handleClick = useCallback(
    (targetIdx: number) => {
      if (anim.phase !== "idle") return;
      if (targetIdx === activeIdx) return;

      timers.current.forEach(clearTimeout);
      timers.current = [];

      // Detect wrapping services (slot delta > half the carousel)
      const exitSlots = new Map<number, number>();
      const entrySlots = new Map<number, number>();

      for (let i = 0; i < N; i++) {
        const fromSlot = slotOf(i, activeIdx);
        const toSlot = slotOf(i, targetIdx);
        const delta = toSlot - fromSlot;

        if (Math.abs(delta) > N / 2) {
          if (delta > 0) {
            // Service jumps to higher slot — it exits left, re-enters from right
            exitSlots.set(i, -1);
            entrySlots.set(i, 7);
          } else {
            // Service jumps to lower slot — exits right, re-enters from left
            exitSlots.set(i, 7);
            entrySlots.set(i, -1);
          }
        }
      }

      const from = activeIdx;

      // Phase 1 — immediate
      setAnim({ phase: "p1", fromIdx: from, toIdx: targetIdx, exitSlots, entrySlots });
      setContentAnim("exiting");

      // Phase 2 at 160 ms
      timers.current.push(
        setTimeout(() => setAnim((a) => ({ ...a, phase: "p2" })), 160)
      );

      // Phase 3 at 360 ms + switch displayed content
      timers.current.push(
        setTimeout(() => {
          setAnim((a) => ({ ...a, phase: "p3" }));
          setDisplayIdx(targetIdx);
          setContentAnim("entering");
        }, 360)
      );

      // Phase 4a at 520 ms — commit activeIdx, teleport wrapping services (no transition)
      // Phase 4b fires after the next paint so the teleport is applied before the settle begins
      timers.current.push(
        setTimeout(() => {
          setActiveIdx(targetIdx);
          setAnim((a) => ({ ...a, phase: "p4a" }));
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setAnim((a) => ({ ...a, phase: "p4b" }));
            });
          });
        }, 520)
      );

      // Done at 720 ms
      timers.current.push(
        setTimeout(() => {
          setAnim({
            phase: "idle",
            fromIdx: targetIdx,
            toIdx: targetIdx,
            exitSlots: new Map(),
            entrySlots: new Map(),
          });
          setContentAnim("visible");
          timers.current = [];
        }, 720)
      );
    },
    [activeIdx, anim.phase]
  );

  const svc = SERVICES[displayIdx];

  // ── Content animation CSS class ───────────────────────────────────────────
  const exitClass = contentAnim === "exiting" ? "anim-exit" : "";

  return (
    <div
      className="bg-[#fffffd] flex flex-col items-center px-[264px] py-[120px] relative size-full"
      data-name="ServicesSection"
    >
      <BackgroundFrame />

      <div className="h-[485px] relative shrink-0 w-[1200px]">
        {/* ── Carousel ─────────────────────────────────────────────────── */}
        <div className="absolute h-[198px] left-0 overflow-clip top-0 w-[1200px]">
          {SERVICES.map((s, i) => {
            const pos = getBadgePos(i);
            const active = isVisuallyActive(i);

            const circleStyle: CSSProperties = {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width:  active ? "88px" : "72px",
              height: active ? "88px" : "72px",
              borderRadius: active ? "44px" : "36px",
              backgroundColor: active ? "#D92B2B" : "#ffffff",
              color: active ? "#ffffff" : "#D92B2B",
              boxShadow: active
                ? "0px 12px 16px rgba(217,43,43,0.2)"
                : "0px 8px 12px rgba(0,0,0,0.1)",
              border: active ? "none" : "1px solid #e8e8e8",
              transition: [
                "width 520ms ease-in-out",
                "height 520ms ease-in-out",
                "border-radius 520ms ease-in-out",
                "background-color 520ms ease-in-out",
                "color 520ms ease-in-out",
                "box-shadow 520ms ease-in-out",
              ].join(", "),
            };

            const labelStyle: CSSProperties = {
              fontFamily: "Geist, sans-serif",
              fontWeight: active ? 700 : 600,
              fontSize: "12px",
              color: active ? "#D92B2B" : "#0c0c0e",
              whiteSpace: "nowrap",
              lineHeight: "normal",
              transition: "color 520ms ease-in-out, font-weight 520ms ease-in-out",
            };

            const wrapperStyle: CSSProperties = {
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
              left: pos.left,
              top: pos.top,
              transform: "translateX(-50%)",
              transition: pos.transition,
              cursor: active ? "default" : "pointer",
              zIndex: active ? 10 : 1,
              userSelect: "none",
            };

            return (
              <div key={s.name} style={wrapperStyle} onClick={() => handleClick(i)}>
                <div style={circleStyle}>
                  <ServiceIcon icon={s.icon} />
                </div>
                <span style={labelStyle}>{s.name}</span>
              </div>
            );
          })}
        </div>

        {/* ── Center content ─────────────────────────────────────────────── */}
        <div
          className="absolute flex flex-col gap-[20px] items-center w-[760px]"
          style={{ left: "50%", top: "227px", transform: "translateX(-50%)" }}
        >
          {/* Tagline pill — always visible */}
          <div
            className="flex gap-[8px] items-center px-[14px] py-[6px] rounded-[100px] relative shrink-0"
            style={{
              backgroundColor: "rgba(217,43,43,0.06)",
              border: "1px solid rgba(217,43,43,0.2)",
            }}
          >
            <svg fill="none" height="6" viewBox="0 0 6 6" width="6">
              <circle cx="3" cy="3" fill="#D92B2B" r="3" />
            </svg>
            <span
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#D92B2B",
                whiteSpace: "nowrap",
              }}
            >
              OUR CAPABILITIES
            </span>
          </div>

          {/* Heading */}
          <h2
            key={`heading-${displayIdx}`}
            className={
              contentAnim === "exiting"
                ? exitClass
                : contentAnim === "entering"
                ? "anim-enter-heading"
                : ""
            }
            style={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 700,
              fontSize: "44px",
              color: "#333333",
              textAlign: "center",
              lineHeight: "normal",
              margin: 0,
              width: "100%",
            }}
          >
            {svc.name}
          </h2>

          {/* Description */}
          <p
            key={`desc-${displayIdx}`}
            className={
              contentAnim === "exiting"
                ? exitClass
                : contentAnim === "entering"
                ? "anim-enter-desc"
                : ""
            }
            style={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 400,
              fontSize: "17px",
              color: "#666666",
              textAlign: "center",
              lineHeight: "26px",
              width: "600px",
              margin: 0,
            }}
          >
            {svc.description}
          </p>

          {/* CTA */}
          <button
            key={`cta-${displayIdx}`}
            className={
              contentAnim === "exiting"
                ? exitClass
                : contentAnim === "entering"
                ? "anim-enter-cta"
                : ""
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#D92B2B",
              color: "white",
              padding: "16px 28px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontFamily: "Geist, sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              flexShrink: 0,
            }}
          >
            View Service Detail
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
              <path
                d={svgPaths.p3bfa7a00}
                stroke="white"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Background decoration (static) ─────────────────────────────────────────
function BackgroundFrame() {
  return (
    <div className="-translate-x-1/2 absolute flex h-[593px] items-center justify-center left-[calc(50%-0.5px)] top-[120px] w-[1299px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-[593px] relative w-[1299px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            height="593"
            preserveAspectRatio="none"
            viewBox="0 0 1299 593"
            width="1299"
          >
            <g clipPath="url(#clip0_bg)">
              <g filter="url(#filter0_bg)">
                <ellipse cx="649.631" cy="634.23" fill="#3385FF" rx="115.793" ry="114.916" />
              </g>
              <path d={svgPaths.p299b2700} fill="#D92B2B" fillOpacity="0.22" stroke="url(#p0_bg)" strokeWidth="1.75444" />
              <path d={svgPaths.p36da600}  fill="#D92B2B" fillOpacity="0.22" stroke="url(#p1_bg)" strokeWidth="1.75444" />
              <path d={svgPaths.p2a037680} fill="#D92B2B" fillOpacity="0.22" stroke="url(#p2_bg)" strokeWidth="1.75444" />
              <path d={svgPaths.p1589adc0} fill="#D92B2B" fillOpacity="0.22" stroke="url(#p3_bg)" strokeWidth="1.75444" />
              <path d={svgPaths.p2a1ba430} fill="#D92B2B" fillOpacity="0.22" stroke="url(#p4_bg)" strokeWidth="1.75444" />
              <g>
                <mask fill="white" id="m1_bg"><path clipRule="evenodd" d={svgPaths.p1c7edb80} fillRule="evenodd" /></mask>
                <path clipRule="evenodd" d={svgPaths.p1c7edb80} fill="#D92B2B" fillOpacity="0.22" fillRule="evenodd" />
                <path d={svgPaths.p2a8f4cf0} fill="url(#p5_bg)" mask="url(#m1_bg)" />
              </g>
              <g>
                <mask fill="white" id="m2_bg"><path clipRule="evenodd" d={svgPaths.pa388100} fillRule="evenodd" /></mask>
                <path clipRule="evenodd" d={svgPaths.pa388100} fill="#D92B2B" fillOpacity="0.22" fillRule="evenodd" />
                <path d={svgPaths.p6d8db80} fill="url(#p6_bg)" mask="url(#m2_bg)" />
              </g>
              <g>
                <mask fill="white" id="m3_bg"><path clipRule="evenodd" d={svgPaths.p10788340} fillRule="evenodd" /></mask>
                <path clipRule="evenodd" d={svgPaths.p10788340} fill="#D92B2B" fillOpacity="0.22" fillRule="evenodd" />
                <path d={svgPaths.p2fb6bc80} fill="url(#p7_bg)" mask="url(#m3_bg)" />
              </g>
              <g>
                <mask fill="white" id="m4_bg"><path clipRule="evenodd" d={svgPaths.p8fc0b00} fillRule="evenodd" /></mask>
                <path clipRule="evenodd" d={svgPaths.p8fc0b00} fill="#D92B2B" fillOpacity="0.22" fillRule="evenodd" />
                <path d={svgPaths.pc5e6400} fill="url(#p8_bg)" mask="url(#m4_bg)" />
              </g>
              <g>
                <mask fill="white" id="m5_bg"><path clipRule="evenodd" d={svgPaths.pcbf4e00} fillRule="evenodd" /></mask>
                <path clipRule="evenodd" d={svgPaths.pcbf4e00} fill="#D92B2B" fillOpacity="0.22" fillRule="evenodd" />
                <path d={svgPaths.p2abd8280} fill="url(#p9_bg)" mask="url(#m5_bg)" />
              </g>
              <rect fill="url(#r10_bg)" height="584.228" width="1296.53" x="2.24219" y="8.77222" />
              <rect fill="url(#r11_bg)" height="593" transform="rotate(-180 1298.77 593)" width="1296.53" x="1298.77" y="593" />
              <rect fill="url(#r12_bg)" height="552.312" width="1256.32" x="21.543" y="40.3521" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1503.2" id="filter0_bg" width="1504.96" x="-102.848" y="-117.372">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="318.343" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="p0_bg" x1="649.247" x2="649.247" y1="-0.405762" y2="592.487"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p1_bg" x1="649.246" x2="649.246" y1="144.363" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p2_bg" x1="649.247" x2="649.247" y1="264.821" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p3_bg" x1="649.246" x2="649.246" y1="372.016" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p4_bg" x1="649.248" x2="649.248" y1="451.585" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p5_bg" x1="649.247" x2="649.247" y1="-0.405762" y2="592.487"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p6_bg" x1="649.246" x2="649.246" y1="144.363" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p7_bg" x1="649.247" x2="649.247" y1="264.821" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p8_bg" x1="649.246" x2="649.246" y1="372.016" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="p9_bg" x1="649.248" x2="649.248" y1="451.585" y2="593.039"><stop stopColor="#FFFFFD" /><stop offset="1" stopColor="#FFFFFD" /></linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(650.507 292.114) rotate(90) scale(418.7 929.187)" gradientUnits="userSpaceOnUse" id="r10_bg" r="1">
                <stop stopColor="#FFFFFD" stopOpacity="0" />
                <stop offset="0.716361" stopColor="#FFFFFD" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1947.04 880.596) rotate(90) scale(424.987 929.187)" gradientUnits="userSpaceOnUse" id="r11_bg" r="1">
                <stop stopColor="#FFFFFD" stopOpacity="0" />
                <stop offset="0.716361" stopColor="#FFFFFD" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="r12_bg" x1="649.704" x2="649.704" y1="29.9962" y2="648.453">
                <stop offset="0.406569" stopColor="#FFFFFD" stopOpacity="0" />
                <stop offset="1" stopColor="#FFFFFD" />
              </linearGradient>
              <clipPath id="clip0_bg">
                <rect fill="white" height="593" width="1299" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
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

/* =========================================================
   CONFIGURATION
========================================================= */

const DEFAULT_SELECTED = 3;
const TOTAL = ITEMS.length;

/*
 * Actual empty space between circles.
 */
const ICON_GAP = 80;

/*
 * Active circle size.
 */
const ACTIVE_SIZE = 80;

/*
 * Distance between slot centers.
 *
 * 80px circle + 80px gap = 160px.
 */
const SLOT_SPACING = ACTIVE_SIZE + ICON_GAP;

/*
 * Top margin.
 */
const TOP_MARGIN = 30;

/*
 * Curve depth.
 */
const CURVE_DEPTH = 70;

/*
 * Duration of the slide animation, in ms.
 */
const TRANSITION_DURATION = 450;


/* =========================================================
   HELPERS
========================================================= */

/*
 * Return relative position of an item from the center.
 *
 * Example:
 *
 * selected = 3
 *
 * item 0 = -3
 * item 1 = -2
 * item 2 = -1
 * item 3 =  0
 * item 4 =  1
 * item 5 =  2
 * item 6 =  3
 */
const getRelativePosition = (
  index: number,
  selectedIndex: number
) => {
  let relative = index - selectedIndex;

  if (relative > TOTAL / 2) {
    relative -= TOTAL;
  }

  if (relative < -TOTAL / 2) {
    relative += TOTAL;
  }

  return relative;
};


/*
 * Easing curve for the slide animation.
 */
const easeOutCubic = (t: number) =>
  1 - Math.pow(1 - t, 3);

/*
 * Y position for a given (possibly fractional) slot
 * position, following the arc.
 *
 * This is the SAME formula used at rest — calling it
 * every animation frame (instead of only at the start
 * and end) is what makes a node crossing the center
 * dip through the curve instead of cutting a straight
 * line across it.
 */
const getCurveY = (position: number) => {
  const distance = Math.abs(position);
  return (
    TOP_MARGIN +
    (distance / 3) * CURVE_DEPTH
  );
};


/*
 * Duration the outgoing text fades/slides out for
 * before the incoming text is swapped in.
 */
const CONTENT_EXIT_DURATION = 180;

/*
 * Duration the incoming text takes to fade/slide in.
 */
const CONTENT_ENTER_DURATION = 220;


/* =========================================================
   COMPONENT
========================================================= */

export function Automation() {
  const [selected, setSelected] = useState(
    DEFAULT_SELECTED
  );

  /*
   * The content (heading/description) can lag behind
   * `selected` by a beat so it can play an exit
   * animation before the new text swaps in.
   */
  const [displayIndex, setDisplayIndex] = useState(
    DEFAULT_SELECTED
  );

  const [contentPhase, setContentPhase] = useState<
    "idle" | "exiting" | "entering"
  >("idle");

  const contentTimersRef = useRef<
    ReturnType<typeof setTimeout>[]
  >([]);

  /*
   * Current active content.
   */
  const active = ITEMS[displayIndex];

  /*
   * Live, per-node slot position (fractional while
   * animating). This is what actually gets rendered.
   */
  const livePositionsRef = useRef<number[]>(
    ITEMS.map((_, index) =>
      getRelativePosition(index, DEFAULT_SELECTED)
    )
  );

  /*
   * Positions the current animation started from / is
   * heading to, captured once per click.
   */
  const animFromRef = useRef<number[]>([
    ...livePositionsRef.current,
  ]);
  const animToRef = useRef<number[]>([
    ...livePositionsRef.current,
  ]);

  const animStartRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  /*
   * Force a re-render on every animation frame.
   */
  const [, forceRender] = useState(0);

  /*
   * Stop any in-flight animation / timers on unmount.
   */
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      contentTimersRef.current.forEach(clearTimeout);
    };
  }, []);


  /* =======================================================
     HANDLE CLICK
  ======================================================= */

  const handleSelect = (index: number) => {
    if (index === selected) {
      return;
    }

    setSelected(index);


    /* =====================================================
       NODE POSITION ANIMATION
    ===================================================== */

    /*
     * Each node's own target slot is still the shortest
     * circular distance from the newly selected node.
     */
    animFromRef.current = [...livePositionsRef.current];
    animToRef.current = ITEMS.map((_, itemIndex) =>
      getRelativePosition(itemIndex, index)
    );
    animStartRef.current = performance.now();

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    const step = (now: number) => {
      const elapsed =
        now - animStartRef.current;

      const t = Math.min(
        elapsed / TRANSITION_DURATION,
        1
      );

      const eased = easeOutCubic(t);

      /*
       * Interpolate each node's slot position, not its
       * x/y directly — y is derived from this position
       * every frame via getCurveY(), so the motion always
       * sits on the real arc.
       */
      livePositionsRef.current = animFromRef.current.map(
        (from, itemIndex) => {
          const to = animToRef.current[itemIndex];
          return from + (to - from) * eased;
        }
      );

      forceRender((value) => value + 1);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);


    /* =====================================================
       CONTENT FADE/SLIDE TRANSITION
    ===================================================== */

    contentTimersRef.current.forEach(clearTimeout);
    contentTimersRef.current = [];

    setContentPhase("exiting");

    contentTimersRef.current.push(
      setTimeout(() => {
        setDisplayIndex(index);
        setContentPhase("entering");
      }, CONTENT_EXIT_DURATION)
    );

    contentTimersRef.current.push(
      setTimeout(() => {
        setContentPhase("idle");
      }, CONTENT_EXIT_DURATION + CONTENT_ENTER_DURATION)
    );
  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      className="
        relative
        bg-white
        py-30
        px-6
        lg:px-[144px]
        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          relative
        "
      >

        {/* =================================================
            ICON ARC SECTION
        ================================================= */}

        <div
          className="
            relative
            h-[380px]
            mb-8
            overflow-hidden
          "
        >

          {/* ===============================================
              BACKGROUND ARC
          =============================================== */}

          <img
            src="/images/automationback.png"
            alt=""
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-0
              w-[1400px]
              max-w-none
              h-auto
              pointer-events-none
              select-none
            "
          />


          {/* ===============================================
              ICON PIVOT
          =============================================== */}

          <div
            className="
              absolute
              left-1/2
              top-0
              w-0
              h-0
            "
          >

            {ITEMS.map((item, index) => {
              /*
               * Live (possibly mid-animation) slot
               * position for this node.
               */
              const position =
                livePositionsRef.current[index];


              /*
               * X position.
               */
              const x =
                position * SLOT_SPACING;


              /*
               * Y position — recomputed from the curve
               * every frame, so nodes crossing the center
               * dip through the arc instead of cutting a
               * straight line across it.
               */
              const y =
                getCurveY(position);


              /*
               * Center item.
               *
               * Based on `selected`, not the live position,
               * since the live position is fractional while
               * animating.
               */
              const isCenter =
                index === selected;


              const Icon = item.icon;


              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() =>
                    handleSelect(index)
                  }
                  aria-pressed={isCenter}
                  className="
                    absolute
                    flex
                    flex-col
                    items-center
                    cursor-pointer
                    focus:outline-none
                  "
                  style={{
                    /*
                     * Button width.
                     */
                    width: 88,

                    /*
                     * Center button around its
                     * calculated X coordinate.
                     */
                    marginLeft: -44,

                    /*
                     * Position.
                     */
                    left: 0,
                    top: 0,

                    /*
                     * X/Y movement.
                     *
                     * Driven manually every animation frame
                     * (see handleSelect), not by a CSS
                     * transition — that's what lets Y be
                     * recomputed from the real curve at each
                     * intermediate X instead of being
                     * linearly interpolated between two
                     * fixed endpoints.
                     */
                    transform: `
                      translateX(${x}px)
                      translateY(${y}px)
                    `,

                    transition: "none",

                    /*
                     * Active item always above others.
                     */
                    zIndex: isCenter
                      ? 20
                      : 10,
                  }}
                >

                  {/* ========================================
                      ICON CIRCLE
                  ======================================== */}

                  <div
                    className={`
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ease-out

                      ${
                        isCenter
                          ? `
                              w-20
                              h-20
                              bg-red-600
                              border-red-600
                              shadow-[0px_12px_16px_rgba(217,43,43,0.2)]
                            `
                          : `
                              w-[72px]
                              h-[72px]
                              bg-white
                              border-red-100
                              shadow-[0px_8px_12px_rgba(0,0,0,0.08)]
                              hover:border-red-300
                            `
                      }
                    `}
                  >
                    <Icon
                      strokeWidth={1}
                      className={`
                        transition-all
                        duration-300
                        ease-out

                        ${
                          isCenter
                            ? `
                                w-10
                                h-10
                                text-white
                              `
                            : `
                                w-9
                                h-9
                                text-red-600
                              `
                        }
                      `}
                    />
                  </div>


                  {/* ========================================
                      LABEL
                  ======================================== */}

                  <span
                    className={`
                      mt-3
                      font-sans
                      font-semibold
                      text-center
                      whitespace-nowrap
                      transition-all
                      duration-300
                      ease-out

                      ${
                        isCenter
                          ? `
                              text-sm
                              text-red-600
                            `
                          : `
                              text-xs
                              text-neutral-900
                            `
                      }
                    `}
                  >
                    {item.label}
                  </span>

                </button>
              );
            })}

          </div>
        </div>


        {/* =================================================
            CONTENT TRANSITION KEYFRAMES

            Scoped here so the component stays self-
            contained — no external CSS file needed.
        ================================================= */}

        <style>{`
          @keyframes automationContentExit {
            from { opacity: 1; transform: translateY(0px); }
            to   { opacity: 0; transform: translateY(-10px); }
          }

          @keyframes automationContentEnterHeading {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0px); }
          }

          @keyframes automationContentEnterDesc {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0px); }
          }

          @keyframes automationContentEnterCta {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0px); }
          }

          .automation-content-exit {
            animation: automationContentExit ${CONTENT_EXIT_DURATION}ms ease-out both;
          }

          .automation-content-enter-heading {
            animation: automationContentEnterHeading ${CONTENT_ENTER_DURATION}ms ease-out 0ms both;
          }

          .automation-content-enter-desc {
            animation: automationContentEnterDesc ${CONTENT_ENTER_DURATION}ms ease-out 40ms both;
          }

          .automation-content-enter-cta {
            animation: automationContentEnterCta ${CONTENT_ENTER_DURATION}ms ease-out 80ms both;
          }
        `}</style>


        {/* =================================================
            CONTENT SECTION
        ================================================= */}

        <div
          className="
            relative
            bottom-40
            text-center
          "
        >

          {/* ===============================================
              BADGE
          =============================================== */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-full
              border
              border-red-100
              bg-red-50
              mb-5
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-red-600
              "
            />

            <span
              className="
                text-red-600
                font-heading
                font-semibold
                text-[11px]
                tracking-[3px]
                uppercase
              "
            >
              OUR CAPABILITIES
            </span>
          </div>


          {/* ===============================================
              HEADING
          =============================================== */}

          <h2
            key={`heading-${displayIndex}`}
            className={`
              font-heading
              font-bold
              text-[44px]
              leading-[57px]
              text-center
              text-neutral-900
              mb-5

              ${
                contentPhase === "exiting"
                  ? "automation-content-exit"
                  : contentPhase === "entering"
                  ? "automation-content-enter-heading"
                  : ""
              }
            `}
          >
            {active.header}
          </h2>


          {/* ===============================================
              DESCRIPTION
          =============================================== */}

          <p
            key={`desc-${displayIndex}`}
            className={`
              font-sans
              text-base
              leading-[21px]
              text-center
              text-neutral-500
              max-w-[600px]
              mx-auto
              mb-8

              ${
                contentPhase === "exiting"
                  ? "automation-content-exit"
                  : contentPhase === "entering"
                  ? "automation-content-enter-desc"
                  : ""
              }
            `}
          >
            {active.des}
          </p>


          {/* ===============================================
              BUTTON
          =============================================== */}

          <a
            key={`cta-${displayIndex}`}
            href="#services"
            className={`
              group
              inline-flex
              items-center
              gap-2
              bg-red-600
              text-white
              font-heading
              font-semibold
              text-[15px]
              leading-5
              px-7
              py-4
              rounded-[10px]

              ${
                contentPhase === "exiting"
                  ? "automation-content-exit"
                  : contentPhase === "entering"
                  ? "automation-content-enter-cta"
                  : ""
              }
            `}
          >
            View All Services

            <ArrowRight
              className="
                w-4
                h-4
                transition-transform
                duration-200
                group-hover:-rotate-30
              "
            />
          </a>

        </div>
      </div>
    </section>
  );
}
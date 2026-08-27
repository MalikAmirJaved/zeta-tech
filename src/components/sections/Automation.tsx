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
 * Duration of ONE slot movement.
 *
 * This is intentionally short because if the user clicks
 * something 3 positions away, we perform 3 quick movements.
 */
const STEP_DURATION = 260;

/*
 * Small delay between individual steps.
 *
 * Keep this low so the movement feels like one continuous
 * carousel rotation.
 */
const STEP_DELAY = 25;


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


/* =========================================================
   COMPONENT
========================================================= */

export function Automation() {
  const [selected, setSelected] = useState(
    DEFAULT_SELECTED
  );

  /*
   * Current slot position for every item.
   *
   * Example:
   *
   * [-3, -2, -1, 0, 1, 2, 3]
   */
  const positionsRef = useRef<number[]>(
    ITEMS.map((_, index) =>
      getRelativePosition(index, DEFAULT_SELECTED)
    )
  );

  /*
   * Items currently being moved outside the visible area
   * and repositioned on the opposite side.
   */
  const [hiddenItems, setHiddenItems] = useState<
    Set<number>
  >(new Set());

  /*
   * Prevent multiple clicks while the carousel is
   * performing the sequential movement.
   */
  const isAnimatingRef = useRef(false);

  /*
   * Force component update after changing refs.
   */
  const [, setTick] = useState(0);

  /*
   * Current active content.
   */
  const active = ITEMS[selected];


  /* =======================================================
     CALCULATE ONE STEP
  ======================================================= */

  const moveOneStep = async (
    direction: 1 | -1
  ) => {
    /*
     * Current slot positions.
     */
    const currentPositions =
      positionsRef.current;

    /*
     * Items that need to wrap.
     */
    const nextHiddenItems = new Set<number>();


    /* =====================================================
       FIND WRAPPING ITEM
    ===================================================== */

    currentPositions.forEach((position, index) => {
      /*
       * Moving left:
       *
       * -3 goes outside left
       * and comes back at +3.
       */
      if (
        direction === -1 &&
        position === -3
      ) {
        nextHiddenItems.add(index);
      }

      /*
       * Moving right:
       *
       * +3 goes outside right
       * and comes back at -3.
       */
      if (
        direction === 1 &&
        position === 3
      ) {
        nextHiddenItems.add(index);
      }
    });


    /*
     * Hide wrapping item BEFORE moving.
     *
     * This prevents the user from seeing it cross
     * the entire screen.
     */
    if (nextHiddenItems.size > 0) {
      setHiddenItems(nextHiddenItems);
    }


    /*
     * Give React one frame to apply opacity: 0.
     */
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        resolve();
      });
    });


    /* =====================================================
       MOVE EVERY ITEM ONE SLOT
    ===================================================== */

    const newPositions =
      currentPositions.map((position) => {
        let nextPosition =
          position - direction;

        /*
         * Wrap around.
         */
        if (nextPosition < -3) {
          nextPosition = 3;
        }

        if (nextPosition > 3) {
          nextPosition = -3;
        }

        return nextPosition;
      });


    /*
     * Save new positions.
     */
    positionsRef.current = newPositions;

    setTick((value) => value + 1);


    /*
     * Wait for the actual slot movement.
     */
    await new Promise<void>((resolve) => {
      window.setTimeout(
        resolve,
        STEP_DURATION
      );
    });


    /*
     * Now the wrapped item is already at its
     * destination. Show it again.
     */
    if (nextHiddenItems.size > 0) {
      setHiddenItems(new Set());

      setTick((value) => value + 1);

      /*
       * Tiny pause makes the reappearance feel natural
       * without slowing down the carousel.
       */
      await new Promise<void>((resolve) => {
        window.setTimeout(
          resolve,
          STEP_DELAY
        );
      });
    }
  };


  /* =======================================================
     HANDLE CLICK
  ======================================================= */

  const handleSelect = async (
    index: number
  ) => {
    /*
     * Ignore clicking current item.
     */
    if (index === selected) {
      return;
    }

    /*
     * Ignore clicks during animation.
     *
     * This prevents two carousel animations from
     * fighting each other.
     */
    if (isAnimatingRef.current) {
      return;
    }

    isAnimatingRef.current = true;


    /* =====================================================
       DETERMINE SHORTEST DIRECTION
    ===================================================== */

    let difference =
      index - selected;

    /*
     * Normalize circular distance.
     */
    if (difference > TOTAL / 2) {
      difference -= TOTAL;
    }

    if (difference < -TOTAL / 2) {
      difference += TOTAL;
    }


    /*
     * Positive:
     *
     * selected -> next item to the right
     *
     * Negative:
     *
     * selected -> next item to the left
     */
    const direction: 1 | -1 =
      difference > 0 ? 1 : -1;


    /*
     * Number of individual steps.
     */
    const numberOfSteps =
      Math.abs(difference);


    /* =====================================================
       MOVE ONE SLOT AT A TIME
    ===================================================== */

    for (
      let step = 0;
      step < numberOfSteps;
      step++
    ) {
      /*
       * Perform exactly ONE carousel movement.
       */
      await moveOneStep(direction);

      /*
       * Update selected center item after every step.
       *
       * This makes the active circle move naturally
       * through the carousel rather than jumping.
       */
      setSelected((current) => {
        let next =
          current + direction;

        if (next < 0) {
          next = TOTAL - 1;
        }

        if (next >= TOTAL) {
          next = 0;
        }

        return next;
      });
    }


    /*
     * Animation finished.
     */
    isAnimatingRef.current = false;
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
              const position =
                positionsRef.current[index];


              /*
               * X position.
               */
              const x =
                position * SLOT_SPACING;


              /*
               * Distance from center.
               */
              const distance =
                Math.abs(position);


              /*
               * Normal curved Y position.
               */
              const y =
                TOP_MARGIN +
                (distance / 3) *
                  CURVE_DEPTH;


              /*
               * Center item.
               */
              const isCenter =
                position === 0;


              /*
               * Is this item temporarily hidden
               * because it is wrapping?
               */
              const isHidden =
                hiddenItems.has(index);


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
                     * Because every click performs
                     * one step at a time, this animation
                     * remains quick and smooth even
                     * for distant items.
                     */
                    transform: `
                      translateX(${x}px)
                      translateY(${y}px)
                    `,

                    transition: isHidden
                      ? "none"
                      : `
                          transform
                          ${STEP_DURATION}ms
                          cubic-bezier(
                            0.22,
                            0.75,
                            0.25,
                            1
                          )
                        `,

                    /*
                     * Hide only the wrapping item.
                     *
                     * It gets repositioned while invisible.
                     */
                    opacity: isHidden
                      ? 0
                      : 1,

                    /*
                     * Don't allow clicking a hidden item.
                     */
                    pointerEvents: isHidden
                      ? "none"
                      : "auto",

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
                              shadow-lg
                            `
                          : `
                              w-[72px]
                              h-[72px]
                              bg-white
                              border-red-100
                              shadow-sm
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
            className="
              font-heading
              font-bold
              text-[44px]
              leading-[57px]
              text-center
              text-neutral-900
              mb-5
              transition-all
              duration-300
            "
          >
            {active.header}
          </h2>


          {/* ===============================================
              DESCRIPTION
          =============================================== */}

          <p
            className="
              font-sans
              text-base
              leading-[21px]
              text-center
              text-neutral-500
              max-w-[600px]
              mx-auto
              mb-8
              transition-all
              duration-300
            "
          >
            {active.des}
          </p>


          {/* ===============================================
              BUTTON
          =============================================== */}

          <a
            href="#services"
            className="
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
            "
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
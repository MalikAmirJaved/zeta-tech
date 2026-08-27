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
 * =========================================================
 * LAYOUT
 * =========================================================
 */

/*
 * Actual empty gap between icon containers.
 */
const ICON_GAP = 80;

/*
 * Largest circle size.
 */
const ACTIVE_SIZE = 80;

/*
 * Distance between slot centers.
 *
 * 80px circle + 80px gap = 160px.
 */
const SLOT_SPACING = ACTIVE_SIZE + ICON_GAP;

/*
 * Top position.
 */
const TOP_MARGIN = 30;

/*
 * Depth of the arc.
 */
const CURVE_DEPTH = 70;

/*
 * Animation duration.
 */
const MOVE_DURATION = 850;

/*
 * Time an item stays hidden while wrapping.
 */
const WRAP_HIDE_DURATION = 350;

/*
 * Time used to reveal the wrapped item.
 */
const WRAP_SHOW_DURATION = 350;


/*
 * =========================================================
 * HELPERS
 * =========================================================
 */

/*
 * Converts an item index into its relative carousel position.
 *
 * Example:
 *
 * selected = 3
 *
 * index 0 -> -3
 * index 1 -> -2
 * index 2 -> -1
 * index 3 ->  0
 * index 4 ->  1
 * index 5 ->  2
 * index 6 ->  3
 */
const getRelativePosition = (
  index: number,
  selectedIndex: number
) => {
  let relative = index - selectedIndex;

  /*
   * Circular wrapping.
   */
  if (relative > TOTAL / 2) {
    relative -= TOTAL;
  }

  if (relative < -TOTAL / 2) {
    relative += TOTAL;
  }

  return relative;
};


export function Automation() {
  const [selected, setSelected] = useState(DEFAULT_SELECTED);

  /*
   * Current X positions.
   */
  const positionsRef = useRef<number[]>(
    ITEMS.map((_, i) => {
      return (i - DEFAULT_SELECTED) * SLOT_SPACING;
    })
  );

  /*
   * Items that are currently performing the
   * hidden -> reposition -> visible animation.
   */
  const [hiddenItems, setHiddenItems] = useState<Set<number>>(
    new Set()
  );

  /*
   * Force re-render after ref changes.
   */
  const [, setTick] = useState(0);

  const active = ITEMS[selected];


  /*
   * =========================================================
   * SELECT ITEM
   * =========================================================
   */

  const handleSelect = (index: number) => {
    if (index === selected) return;

    const oldSelected = selected;

    /*
     * Determine direction.
     */
    let steps = index - oldSelected;

    if (steps > TOTAL / 2) {
      steps -= TOTAL;
    }

    if (steps < -TOTAL / 2) {
      steps += TOTAL;
    }

    /*
     * =======================================================
     * FIND ITEMS THAT MUST WRAP
     * =======================================================
     *
     * Example:
     *
     * Going from:
     *
     *       [0 1 2 3 4 5 6]
     *
     * to:
     *
     *       [6 0 1 2 3 4 5]
     *
     * item 6 may need to appear from the opposite side.
     *
     * Those items should NOT visibly travel across
     * the entire carousel.
     */

    const wrappingItems = new Set<number>();

    ITEMS.forEach((_, i) => {
      const oldRelative = getRelativePosition(i, oldSelected);
      const newRelative = getRelativePosition(i, index);

      /*
       * If the item crosses the circular boundary,
       * treat it as a wrapping item.
       */
      const difference = newRelative - oldRelative;

      if (Math.abs(difference) > 3) {
        wrappingItems.add(i);
      }
    });


    /*
     * =======================================================
     * HIDE WRAPPING ITEMS
     * =======================================================
     */

    if (wrappingItems.size > 0) {
      setHiddenItems(wrappingItems);
    }


    /*
     * =======================================================
     * CALCULATE NEW POSITIONS
     * =======================================================
     */

    const newPositions = positionsRef.current.map((_, i) => {
      const relativePosition = getRelativePosition(
        i,
        index
      );

      return relativePosition * SLOT_SPACING;
    });


    /*
     * =======================================================
     * UPDATE SELECTED
     * =======================================================
     */

    setSelected(index);


    /*
     * =======================================================
     * REPOSITION
     * =======================================================
     *
     * Normal items animate.
     *
     * Wrapping items are hidden, so their position can
     * effectively jump from one side to the other.
     */

    positionsRef.current = newPositions;

    setTick((t) => t + 1);


    /*
     * =======================================================
     * SHOW WRAPPED ITEMS
     * =======================================================
     *
     * They remain hidden for a short moment, then appear
     * at their new destination.
     */

    if (wrappingItems.size > 0) {
      setTimeout(() => {
        setHiddenItems(new Set());

        setTick((t) => t + 1);
      }, WRAP_HIDE_DURATION + WRAP_SHOW_DURATION);
    }
  };


  return (
    <section className="relative bg-white py-30 px-6 lg:px-[144px] overflow-hidden">

      <div className="max-w-[1440px] mx-auto relative">


        {/* =====================================================
            ICONS ARC SECTION
        ====================================================== */}

        <div className="relative h-[380px] mb-8">


          {/* ===================================================
              BACKGROUND ARC
          ==================================================== */}

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


          {/* ===================================================
              ICON PIVOT
          ==================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-0
              w-0
              h-0
            "
          >


            {/* =================================================
                ICONS
            ================================================= */}

            {ITEMS.map((item, i) => {

              const x = positionsRef.current[i];


              /*
               * Distance from center.
               */
              const distanceFromCenter =
                Math.abs(x) / SLOT_SPACING;


              /*
               * Vertical curve.
               */
              const y =
                TOP_MARGIN +
                (distanceFromCenter / CENTER) *
                  CURVE_DEPTH;


              /*
               * Is this the active center item?
               */
              const isCenter =
                Math.abs(x) < 1;


              /*
               * Is this item currently wrapping?
               */
              const isHidden =
                hiddenItems.has(i);


              const Icon = item.icon;


              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleSelect(i)}
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
                     * =================================================
                     * X POSITION
                     * =================================================
                     */
                    left: `${x}px`,


                    /*
                     * =================================================
                     * Y POSITION
                     * =================================================
                     */
                    top: `${y}px`,


                    /*
                     * Button width.
                     */
                    width: 88,


                    /*
                     * Center button on its X coordinate.
                     */
                    marginLeft: -44,


                    /*
                     * =================================================
                     * WRAPPING ANIMATION
                     * =================================================
                     *
                     * Normal items:
                     *
                     * left/top animate smoothly.
                     *
                     * Wrapping items:
                     *
                     * disappear first.
                     *
                     * Then their position changes while invisible.
                     *
                     * Then they appear.
                     */

                    transition: isHidden
                      ? `
                          opacity ${WRAP_HIDE_DURATION}ms ease-out
                        `
                      : `
                          left ${MOVE_DURATION}ms cubic-bezier(0.33, 1.2, 0.64, 1),
                          top ${MOVE_DURATION}ms cubic-bezier(0.33, 1.2, 0.64, 1),
                          opacity ${WRAP_SHOW_DURATION}ms ease-in
                        `,

                    /*
                     * Hide wrapped item.
                     */
                    opacity: isHidden ? 0 : 1,

                    /*
                     * Keep hidden item from being clickable.
                     */
                    pointerEvents: isHidden
                      ? "none"
                      : "auto",

                    /*
                     * Keep wrapped item above/below correctly.
                     */
                    zIndex: isCenter ? 20 : 10,
                  }}
                >


                  {/* ============================================
                      ICON CIRCLE
                  ============================================= */}

                  <div
                    className={`
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
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
                        duration-500
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


                  {/* ============================================
                      LABEL
                  ============================================= */}

                  <span
                    className={`
                      mt-3
                      font-sans
                      font-semibold
                      text-center
                      whitespace-nowrap
                      transition-all
                      duration-500
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


        {/* =====================================================
            CONTENT SECTION
        ====================================================== */}

        <div className="relative bottom-40 text-center">


          {/* ===================================================
              BADGE
          ==================================================== */}

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


          {/* ===================================================
              HEADING
          ==================================================== */}

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


          {/* ===================================================
              DESCRIPTION
          ==================================================== */}

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


          {/* ===================================================
              BUTTON
          ==================================================== */}

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
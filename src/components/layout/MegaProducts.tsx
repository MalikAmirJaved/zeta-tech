"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "CONNECTHUB",
    description:
      "Next-Generation Software Platform For Programmatic Global Connectivity And Virtual SD‑WAN Telemetry Control.",
    image: "/images/frame-3.png",
    explore: "#",
  },
  {
    name: "CLOUDHUB",
    description:
      "Cloud-native infrastructure platform delivering scalable, secure, and compliant cloud solutions for enterprise workloads.",
    image: "/images/frame-3.png",
    explore: "#",
  },
  {
    name: "ZEKLI",
    description:
      "AI-driven operations platform unifying network intelligence, automation, and observability across your entire stack.",
    image: "/images/frame-3.png",
    explore: "#",
  },
];

export function MegaProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = products[activeIndex];

  return (
    <div className="w-full bg-white border-b border-border py-10">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[144px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h3 className="font-heading font-semibold text-3xl text-foreground">Products</h3>
          <a
            href="#"
            className="group px-5 py-2 rounded-full border border-primary text-primary font-heading font-semibold text-sm hover:bg-primary hover:text-white transition-colors flex items-center gap-1"
          >
            View All Products
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:-rotate-30" />
          </a>
        </div>

        {/* Products list + detail */}
        <div className="flex items-start gap-12">
          {/* Left list */}
          <div className="w-1/3 divide-y divide-border">
            {products.map((product, index) => (
              <button
                key={product.name}
                onClick={() => setActiveIndex(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span
                  className={`font-heading font-semibold text-base tracking-wide transition-colors ${
                    index === activeIndex
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {product.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-colors ${
                    index === activeIndex ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right detail */}
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden w-full h-[180px]">
              <Image
                src={active.image}
                alt={active.name}
                width={800}
                height={180}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              {active.description}
            </p>
            <a
              href={active.explore}
              className="group mt-4 inline-flex items-center gap-1 text-primary font-heading font-semibold text-sm"
            >
              Explore {active.name}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:-rotate-30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

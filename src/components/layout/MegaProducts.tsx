"use client";

import Image from "next/image";

export function MegaProducts() {
  return (
    <div className="w-full bg-white border-b border-border shadow-lg py-8">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[144px] flex gap-8">
        {/* Left list */}
        <div className="w-1/3">
          <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">Products</h3>
          <div className="divide-y divide-border">
            <a className="block py-6 text-primary font-heading font-semibold cursor-pointer">CONNECTHUB</a>
            <a className="block py-6 text-muted-foreground cursor-pointer">CLOUDHUB</a>
            <a className="block py-6 text-muted-foreground cursor-pointer">ZEKLI</a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-border" />

        {/* Right detail */}
        <div className="flex-1 pl-8 flex items-start gap-6">
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden w-full h-[120px] md:h-[140px]">
              <Image
                src="/images/frame-3.png"
                alt="ConnectHub"
                width={560}
                height={140}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-muted-foreground">
              Next-Generation Software Platform For Programmatic Global Connectivity And Virtual SD‑WAN Telemetry Control.
            </p>
            <a href="#" className="mt-4 inline-block text-primary font-heading font-semibold">
              Explore CONNECTHUB →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "CONNECTIVITY",
    description: "Connectivity Infrastructure",
    explore: "#",
  },
  {
    title: "WHOLESALE VOICE",
    description: "Voice Services",
    explore: "#",
  },
  {
    title: "CLOUD COMPUTING",
    description: "Sovereign Intelligence Stack",
    explore: "#",
    subLinks: ["Core Cloud", "Data Center", "Intelligent Automation", "Network Intelligence"],
  },
  {
    title: "CPAAS",
    description: "Communications Platform",
    explore: "#",
  },
  {
    title: "A2P MESSAGING",
    description: "Business Messaging",
    explore: "#",
  },
];

export function MegaServices() {
  return (
    <div className="w-full bg-white border-b border-border py-10">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[144px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h3 className="font-heading font-semibold text-3xl text-foreground">Services</h3>
          <a
            href="#"
            className="group px-5 py-2 rounded-full border border-primary text-primary font-heading font-semibold text-sm hover:bg-primary hover:text-white transition-colors flex items-center gap-1"
          >
            View All Services
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:-rotate-30" />
          </a>
        </div>

        {/* Services grid + globe */}
        <div className="flex items-start gap-8">
          <div className="grid grid-cols-3 flex-1">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`py-6 ${index < 3 ? "border-b border-border" : ""}`}
              >
                <h4 className="font-heading font-semibold text-base text-foreground tracking-wide">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mt-2 text-sm">{service.description}</p>
                <a
                  href={service.explore}
                  className="group text-primary mt-3 inline-flex items-center gap-1 font-heading font-semibold text-sm"
                >
                  Explore
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:-rotate-30" />
                </a>
                {service.subLinks && (
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {service.subLinks.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="text-foreground text-sm underline underline-offset-2 hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Globe */}
          <div className="w-[340px] flex-shrink-0 flex items-center justify-center">
            <div className="w-[340px] h-[340px] relative">
              <Image
                src="/images/globe.png"
                alt="globe"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

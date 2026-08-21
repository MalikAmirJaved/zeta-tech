"use client";

import { ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Sovereign Cloud Architecture in Modern Telecommunication Systems",
    category: "Infrastructure",
    date: "Jan 15, 2025",
    image: "/images/insight-1.jpg",
  },
  {
    title: "Terrestrial Landing Station Reaches Operational Milestone",
    category: "Milestone",
    date: "Jan 10, 2025",
    image: "/images/insight-2.jpg",
  },
  {
    title: "Network Intelligence Automation and Traffic Shaping Models",
    category: "Technology",
    date: "Jan 5, 2025",
    image: "/images/insight-3.jpg",
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-zeta-white py-20 px-6 lg:px-[144px]">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zeta-red/20 bg-zeta-red/[0.0588235] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-zeta-red" />
          <span className="text-zeta-red font-heading font-bold text-[11px] tracking-[3px] uppercase">
            NEWS & INSIGHTS
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-[44px] leading-[57px] text-zeta-text mb-12">
          Latest Insights & System Updates
        </h2>

        {/* Insight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="bg-zeta-page-bg border border-zeta-border rounded-2xl overflow-hidden text-left hover:shadow-lg transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-zeta-dark relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-zeta-gray text-sm">{insight.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-zeta-red font-mono text-[10px] tracking-[2px] uppercase">
                    {insight.category}
                  </span>
                  <span className="text-zeta-gray text-xs">·</span>
                  <span className="text-zeta-gray text-xs">{insight.date}</span>
                </div>
                
                <h3 className="font-heading font-bold text-lg text-zeta-text mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-zeta-red font-heading font-semibold text-sm hover:underline"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#insights"
          className="inline-flex items-center gap-2 bg-zeta-red text-zeta-white font-heading font-semibold text-[15px] leading-5 px-7 py-4 rounded-[10px] hover:bg-red-700 transition-colors"
        >
          View All Insights
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

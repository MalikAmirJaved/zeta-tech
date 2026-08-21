"use client";

import Image from "next/image";

export function MegaServices() {
  return (
    <div className="w-full bg-white border-b border-border shadow-lg py-8">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[144px] flex gap-8 items-start">
        {/* Service columns */}
        <div className="grid grid-cols-3 gap-8 flex-1">
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground">CONNECTIVITY</h4>
            <p className="text-muted-foreground mt-2">Connectivity Infrastructure</p>
            <a href="#" className="text-primary mt-3 inline-block font-heading font-semibold">
              Explore →
            </a>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground">WHOLESALE VOICE</h4>
            <p className="text-muted-foreground mt-2">Voice Services</p>
            <a href="#" className="text-primary mt-3 inline-block font-heading font-semibold">
              Explore →
            </a>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground">CLOUD COMPUTING</h4>
            <p className="text-muted-foreground mt-2">Sovereign Intelligence Stack</p>
            <a href="#" className="text-primary mt-3 inline-block font-heading font-semibold">
              Explore →
            </a>
            <ul className="mt-4 text-muted-foreground space-y-2">
              <li><a href="#" className="underline">Core Cloud</a></li>
              <li><a href="#" className="underline">Data Center</a></li>
              <li><a href="#" className="underline">Intelligent Automation</a></li>
              <li><a href="#" className="underline">Network Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground">CPAAS</h4>
            <p className="text-muted-foreground mt-2">Communications Platform</p>
            <a href="#" className="text-primary mt-3 inline-block font-heading font-semibold">
              Explore →
            </a>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground">A2P MESSAGING</h4>
            <p className="text-muted-foreground mt-2">Business Messaging</p>
            <a href="#" className="text-primary mt-3 inline-block font-heading font-semibold">
              Explore →
            </a>
          </div>
        </div>

        {/* Globe image */}
        <div className="w-[240px] flex items-center justify-center flex-shrink-0">
          <div className="w-[240px] h-[240px] rounded-full overflow-hidden">
            <Image
              src="/images/globe.png"
              alt="globe"
              width={240}
              height={240}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
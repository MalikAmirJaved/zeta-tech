import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { Automation } from "@/components/sections/Automation";
import { Stack } from "@/components/sections/Stack";
import { Platforms } from "@/components/sections/Platforms";
import { Proof } from "@/components/sections/Proof";
import { Insights } from "@/components/sections/Insights";
import { Industries } from "@/components/sections/Industries";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <About />
        <Automation />
        <Stack />
        <Platforms />
        <Proof />
        <Insights />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

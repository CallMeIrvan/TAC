import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProgramPreview } from "@/components/sections/ProgramPreview";
import { AboutSummary } from "@/components/sections/AboutSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSummary />
      <ProgramPreview />
    </>
  );
}

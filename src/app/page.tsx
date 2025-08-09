import { Hero } from "@/components/ui/animated-hero";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative" style={{ backgroundColor: '#c7d3bf' }}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}

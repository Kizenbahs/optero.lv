"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/moving-border";

export default function HeroSection() {
  return (
    <Button
      borderRadius="1.75rem"
      containerClassName="text-center max-w-3xl mx-auto relative z-10 h-auto w-auto"
      className="bg-card text-card-foreground p-8 sm:p-12 flex flex-col items-center justify-center shadow-2xl border"
      duration="2s"
      as="div"
    >
      {/* First Line - Badge */}
      <div className="mb-6">
        <Badge 
          variant="secondary" 
          className="animate-slide-in-top font-oswald"
          style={{ animationDelay: '0.2s' }}
        >
          Drīzumā portāls ar vērtīgiem rīkiem un informāciju: 🚀
        </Badge>
      </div>

      {/* Second Line - Title */}
      <div className="mb-4">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-slide-in-left font-oswald"
          style={{ 
            color: '#9899a6',
            animationDelay: '0.4s'
          }}
        >
          OPTERO.LV
        </h1>
      </div>
      
      {/* Third Line - Description */}
      <div>
        <span 
          className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-sm font-medium text-muted-foreground animate-slide-in-right font-oswald"
          style={{ 
            animationDelay: '0.6s'
          }}
        >
          Labāko profesionāļu portāls
        </span>
      </div>
    </Button>
  );
}

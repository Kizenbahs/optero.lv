import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated pulse gradient background */}
      <div 
        className="absolute inset-0 animate-pulse-gradient"
        style={{
          background: 'radial-gradient(circle, #1a1a1a, #2d2d2d, #1a1a1a, #333333, #0f0f0f)',
        }}
      />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original pulse elements - enhanced */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Wave motion elements */}
        <div className="absolute top-1/4 left-0 w-3 h-40 bg-gradient-to-b from-transparent via-white/25 to-transparent animate-wave-motion" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 left-0 w-2 h-32 bg-gradient-to-b from-transparent via-red/35 to-transparent animate-wave-motion" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-0 w-1 h-24 bg-gradient-to-b from-transparent via-blue/30 to-transparent animate-wave-motion" style={{ animationDelay: '8s' }}></div>
        
        {/* Spiral flow elements */}
        <div className="absolute top-full left-0">
          <div className="w-6 h-6 bg-gradient-radial from-white/40 to-transparent rounded-full animate-spiral-flow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute top-full right-1/3">
          <div className="w-4 h-4 bg-gradient-radial from-red/50 to-transparent rounded-full animate-spiral-flow" style={{ animationDelay: '6s' }}></div>
        </div>
        
        {/* Zigzag motion elements */}
        <div className="absolute top-full right-0 w-2 h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-zigzag-motion" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-full right-1/4 w-1 h-48 bg-gradient-to-b from-transparent via-red/25 to-transparent animate-zigzag-motion" style={{ animationDelay: '7s' }}></div>
        
        {/* Floating beam elements */}
        <div className="absolute top-full left-1/4 w-64 h-2 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-floating-beams" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-full left-2/3 w-48 h-1 bg-gradient-to-r from-transparent via-red/20 to-transparent animate-floating-beams" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-full right-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-blue/18 to-transparent animate-floating-beams" style={{ animationDelay: '9s' }}></div>
        
        {/* Enhanced floating elements */}
        <div className="absolute top-1/3 right-1/4 w-40 h-2 bg-gradient-to-r from-white/0 via-white/35 to-white/0 animate-linear-fade" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-32 h-1 bg-gradient-to-r from-red/0 via-red/45 to-red/0 animate-linear-fade" style={{ animationDelay: '4.5s' }}></div>
        
        {/* Complex rotating elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-1 bg-gradient-to-r from-transparent via-white/12 to-transparent animate-linear-rotate" style={{ animationDelay: '0s' }}></div>
        </div>
        <div className="absolute top-1/3 right-1/5">
          <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-red/22 to-transparent animate-linear-rotate" style={{ animationDelay: '6s' }}></div>
        </div>
      </div>
      
      <HeroSection />
    </div>
  );
}

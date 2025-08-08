import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Badge - slides in from top */}
        <Badge 
          variant="secondary" 
          className="mb-6 bg-gradient-to-r from-gray-600 to-green-600 text-white hover:from-gray-700 hover:to-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-xl animate-slide-in-top border-0 backdrop-blur-sm"
          style={{ animationDelay: '0.2s' }}
        >
          Drīzumā 🚀
        </Badge>

        {/* Main Heading - slides in from left */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight animate-slide-in-left bg-gradient-to-r from-gray-700 via-green-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg"
          style={{ 
            animationDelay: '0.4s',
            fontFamily: 'Georgia, "Times New Roman", Times, serif'
          }}
        >
          OPTERO.LV
        </h1>
        
        {/* Subheading - slides in from right */}
        <p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto font-medium animate-slide-in-right drop-shadow-sm"
          style={{ 
            animationDelay: '0.6s',
            fontFamily: 'Georgia, "Times New Roman", Times, serif'
          }}
        >
          Where we can hire the best talent
        </p>
      </div>
    </div>
  );
}

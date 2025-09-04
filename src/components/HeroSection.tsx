import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/85f2aafd-71ba-46ee-971c-52d162637967.png';
    link.download = 'Dut-Kumar-Syangtan-CV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="container-wide relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/lovable-uploads/131c2fe6-fce3-4262-947c-a3bd7e1c6656.png"
                  alt="Dut Kumar Syangtan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-bounce-gentle">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="animate-fade-in mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Dut Kumar Syangtan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Documentation Officer • Project Officer • Social Mobilizer
            </p>
          </div>

          {/* Tagline */}
          <div className="animate-fade-in-delay mb-8">
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Passionate professional with 8+ years of expertise in social work, project management, 
              and community development. Specialized in digital tools and data management solutions 
              for creating meaningful impact through innovative approaches.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+977 9860329954</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>dut.ksyangtan@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Hetauda-11, Thanabharyang</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up">
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
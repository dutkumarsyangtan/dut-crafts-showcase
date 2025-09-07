import { Button } from "@/components/ui/button"; // Use relative path if @/ alias not configured
import { Download, Mail, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/dks-uploads/Resume.pdf"; // Make sure this file exists in public/dks-uploads
    link.setAttribute("download", "Resume.pdf");
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-600 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 transform transition-all duration-700 scale-95 hover:scale-100">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/dks-uploads/Dut-Kumar-Syangtan.png"
                  alt="Dut Kumar Syangtan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-bounce">
                <span role="img" aria-label="waving hand" className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 opacity-0 animate-fade-in opacity-100 transition-opacity duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Dut Kumar Syangtan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Documentation Officer • Project Officer • Social Mobilizer
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8 opacity-0 animate-fade-in delay-200 opacity-100 transition-opacity duration-1000">
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Passionate professional with 8+ years of expertise in social work, project management, 
              and community development. Specialized in digital tools and data management solutions 
              for creating meaningful impact through innovative approaches.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 text-white/90 opacity-0 animate-slide-up opacity-100 transition-opacity duration-1000">
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

          {/* Download CV Button */}
          <div className="opacity-0 animate-slide-up opacity-100 transition-opacity duration-1000">
            <Button
              onClick={handleDownloadCV}
              size="lg"
              aria-label="Download CV"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center mx-auto"
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

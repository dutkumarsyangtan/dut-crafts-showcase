import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  const [showMessage, setShowMessage] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/dks-uploads/Resume.pdf";
    link.setAttribute("download", "Resume.pdf");
    link.click();
  };

  const handleEmojiClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide after 3 seconds
  };

  return (
    <section className="
      relative min-h-screen flex items-center justify-center
      bg-blue-200 dark:bg-gradient-to-br dark:from-black dark:via-gray-800 dark:to-yellow-900
      transition-colors duration-1000
      overflow-hidden
    ">
      <div className="absolute inset-0 opacity-10 bg-white/10 dark:bg-black/20"></div>

      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 transform transition-all duration-700 scale-95 hover:scale-100 relative">
            <div className="relative inline-block">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/dks-uploads/Dut-Kumar-Syangtan.png"
                  alt="Dut Kumar Syangtan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Waving Hand Emoji */}
              <div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer animate-bounce"
                onClick={handleEmojiClick}
              >
                <span role="img" aria-label="waving hand" className="text-2xl">👋</span>
              </div>

              {/* Pop-up Hello Message */}
              {showMessage && (
                <div className="
                  absolute -top-14 -right-4
                  bg-yellow-400 dark:bg-yellow-600
                  text-black dark:text-white
                  font-extrabold text-lg md:text-xl
                  px-4 py-2 rounded-xl shadow-2xl
                  animate-pop
                  whitespace-nowrap
                  z-50
                ">
                  Hello! Nice to meet you 👋
                </div>
              )}
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Dut Kumar Syangtan
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium">
              Documentation Officer • Project Officer • Social Mobilizer
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Passionate professional with 8+ years of expertise in social work, project management, 
              and community development. Specialized in digital tools and data management solutions 
              for creating meaningful impact through innovative approaches.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 text-gray-800 dark:text-gray-200">
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

          {/* Download CV */}
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Pop-up Animation */}
      <style jsx>{`
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

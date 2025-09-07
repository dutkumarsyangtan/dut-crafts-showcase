import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone, X } from "lucide-react";

export function HeroSection() {
  const [showMessage, setShowMessage] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/dks-uploads/Resume.pdf";
    link.setAttribute("download", "Resume.pdf");
    link.click();
  };

  const handleEmojiClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-200 dark:bg-gradient-to-br dark:from-black dark:via-gray-800 dark:to-yellow-900 transition-colors duration-1000 overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 bg-white/10 dark:bg-black/20"></div>

      <div className="container mx-auto relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Profile Image */}
          <div className="mb-8 transform transition-all duration-700 scale-95 hover:scale-100 relative">
            <div className="relative inline-block">
              <div
                className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl cursor-pointer"
                onClick={handleImageClick}
              >
                <img
                  src="/dks-uploads/Dut-Kumar-Syangtan.png"
                  alt="Dut Kumar Syangtan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Waving Hand Emoji - stays at bottom-right of picture */}
              <div
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer animate-bounce"
                onClick={handleEmojiClick}
              >
                <span role="img" aria-label="waving hand" className="text-2xl">👋</span>
              </div>

              {/* Pop-up Hello Message */}
              {showMessage && (
                <div className="absolute -top-14 -right-4 bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white font-extrabold text-lg md:text-xl px-4 py-2 rounded-xl shadow-2xl animate-pop whitespace-nowrap z-50">
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
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed text-justify">
              Results-driven professional with over 8 years of experience in social work, project management, and community development. 
              Expert in leveraging digital tools and data management solutions to design and implement innovative programs that create measurable, meaningful impact. 
              Recognized for delivering strategic solutions, fostering community engagement, and driving successful project outcomes.
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

      {/* Fullscreen Image Modal */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleCloseImage} // click outside to close
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl z-50"
            onClick={(e) => { e.stopPropagation(); handleCloseImage(); }}
          >
            <X />
          </button>
          <img
            src="/dks-uploads/Dut-Kumar-Syangtan.png"
            alt="Dut Kumar Syangtan Full"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}

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

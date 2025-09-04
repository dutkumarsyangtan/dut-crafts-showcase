import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dut Kumar Syangtan</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Documentation Officer, Project Officer & Social Mobilizer with 8+ years of experience,
              specialized in digital tools, data automation, and community development through technology innovation.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">Serving communities with tech solutions for 8+ years</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+977 9860329654</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">dut.kesyangtan@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hetauda-11, Thanatharayng</span>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Professional Focus</h4>
            <div className="space-y-2">
              <div className="text-sm text-primary-foreground/80">• KoboToolbox & Digital Data Management</div>
              <div className="text-sm text-primary-foreground/80">• Google Apps Scripts & Automation</div>
              <div className="text-sm text-primary-foreground/80">• Advanced Excel & Dashboard Creation</div>
              <div className="text-sm text-primary-foreground/80">• Project Management & Community Development</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Dut Kumar Syangtan. Committed to social service and community development.
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Portfolio crafted with care • Available for professional opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
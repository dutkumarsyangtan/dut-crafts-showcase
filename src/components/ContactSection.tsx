import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export function ContactSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/dks-uploads/Resume.pdf";
    link.download = "Dut-Kumar-Syangtan-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:dut.ksyangtan@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+9779860329954';
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on meaningful projects? Let's discuss how my
            experience in social work and project management can contribute to
            your organization's goals.
          </p>
        </div>

<<<<<<< HEAD
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="card-hover-effect h-fit">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div 
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-all cursor-pointer group"
                    onClick={handlePhoneClick}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium text-foreground">+977 9860329954</div>
                    </div>
=======
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="card-hover-effect h-fit">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-all cursor-pointer group"
                  onClick={handlePhoneClick}
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
>>>>>>> 6d17e67 (Save current changes before pull)
                  </div>

                  <div 
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-all cursor-pointer group"
                    onClick={handleEmailClick}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground">dut.ksyangtan@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium text-foreground">
                        Hetauda-11, Thanabharyang
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Best Time to Contact
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Monday to Friday, 9:00 AM - 6:00 PM (Nepal Time)
                    <br />
                    Response time: Within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-hover-effect h-fit">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Quick Actions
                </h3>

                <div className="space-y-4 mb-8">
                  <Button
                    onClick={handleDownloadCV}
                    className="w-full justify-start h-auto p-4 hover:scale-105 transition-all"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Download CV</div>
                      <div className="text-xs opacity-90">
                        Complete professional resume
                      </div>
                    </div>
                  </Button>

                  <Button
                    onClick={handleEmailClick}
                    variant="outline"
                    className="w-full justify-start h-auto p-4 hover:scale-105 transition-all"
                    size="lg"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Send Email</div>
                      <div className="text-xs opacity-70">Direct email communication</div>
                    </div>
                  </Button>

                  <Button
                    onClick={handlePhoneClick}
                    variant="outline"
                    className="w-full justify-start h-auto p-4 hover:scale-105 transition-all"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Call Now</div>
                      <div className="text-xs opacity-70">Direct phone conversation</div>
                    </div>
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">
                    Looking for Opportunities
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Open to new challenges in social work, project management, 
                    and community development roles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

<<<<<<< HEAD
          {/* Professional Summary Card */}
          <Card className="card-hover-effect">
            <CardContent className="p-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Make a Difference Together?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With 8+ years of experience in social work, project management, digital automation, and community development, 
                  I bring a unique combination of technical expertise and compassionate leadership to every project. 
                  Let's discuss how my skills in KoboToolbox, Google Apps Scripts, and advanced Excel can contribute to your organization's digital transformation and social impact goals.
=======
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">
                  Best Time to Contact
                </h4>
                <p className="text-sm text-muted-foreground">
                  Monday to Friday, 9:00 AM - 6:00 PM (Nepal Time)
                  <br />
                  Response time: Within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="card-hover-effect h-fit">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4 mb-8">
                <Button
                  onClick={handleDownloadCV}
                  className="w-full justify-start h-auto p-4 hover:scale-105 transition-all"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Download CV</div>
                    <div className="text-xs opacity-90">
                      Complete professional resume
                    </div>
                  </div>
                </Button>

                <Button
                  onClick={handleEmailClick}
                  variant="outline"
                  className="w-full justify-start h-auto p-4 hover:scale-105 transition-all"
                  size="lg"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Send Email</div>
                    <div className="text-xs opacity-70">
                      Direct email communication
                    </div>
                  </div>
                </Button>

                <Button
                  onClick={handlePhoneClick}
                  variant="outline"
                  className="w-full justify-start h-auto p-4 hover:scale-105 transition-all"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Call Now</div>
                    <div className="text-xs opacity-70">Direct phone conversation</div>
                  </div>
                </Button>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">
                  Looking for Opportunities
                </h4>
                <p className="text-sm text-muted-foreground">
                  Open to new challenges in social work, project management, 
                  and community development roles.
>>>>>>> 6d17e67 (Save current changes before pull)
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={handleEmailClick} size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Start Conversation
                  </Button>
                  <Button onClick={handleDownloadCV} variant="outline" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    View Full Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  ); // <-- closes return
} // <-- closes function

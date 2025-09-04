import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, User, Building } from "lucide-react";

export function ReferencesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Professional Reference
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact my supervisor for detailed information about my work performance, 
            professional capabilities, and contributions to the organization.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="card-hover-effect">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                Mr. Jhabindra Gyawali
              </CardTitle>
              <p className="text-lg text-muted-foreground font-medium">
                Manager, CWIN-Nepal
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground">+977 9855029630</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground">jhabindra.cwin@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Organization</div>
                  <div className="font-medium text-foreground">CWIN-Nepal (Child Workers in Nepal Concerned Centre)</div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-3">About the Reference</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mr. Jhabindra Gyawali has been my direct supervisor at CWIN-Nepal for over 5 years. 
                  He can provide comprehensive insights into my work performance, technical expertise in digital tools, 
                  and contributions to various social work projects and community development initiatives.
                </p>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground italic">
                  "Available for reference upon request - 
                  <br />Please feel free to contact for detailed professional evaluation"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
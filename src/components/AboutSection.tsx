import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="section-padding section-bg">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover-effect">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                With 8+ years of social work experience at CWIN-Nepal, I am an enthusiastic, 
                responsible, and reliable professional with strong office management and 
                communication skills. I thrive in team environments and work well under 
                pressure, effectively addressing problems and negotiating beneficial agreements.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                As a caring professional with expertise in case management, digital tools, and client advocacy, 
                I am committed to helping individuals achieve their goals by connecting them 
                with necessary resources and leveraging technology for efficient solutions, 
                making me a valuable addition to any organization.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">90+</div>
                  <div className="text-sm text-muted-foreground">Communities Served</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

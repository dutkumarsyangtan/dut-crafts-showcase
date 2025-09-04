import { Card, CardContent } from "@/components/ui/card";
import { Database, MessageSquare, Users } from "lucide-react";

const expertiseAreas = [
  {
    title: "Data Management & Automation",
    icon: Database,
    description: "Advanced expertise in digital data systems, automation tools, and analytics. Specialized in KoboToolbox for comprehensive data collection and Google Apps Scripts for workflow automation.",
    skills: [
      "KoboToolbox Advanced Implementation",
      "Google Apps Scripts Development", 
      "Excel Automation & Macros",
      "Data Visualization & Dashboards",
      "Database Design & Management",
      "API Integration & Automation"
    ],
    color: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
  },
  {
    title: "Communication",
    icon: MessageSquare,
    description: "Excellent communication skills developed through years of stakeholder engagement, training facilitation, and community outreach programs.",
    skills: [
      "Stakeholder Engagement",
      "Training Facilitation", 
      "Public Speaking",
      "Written Communication",
      "Cross-cultural Communication",
      "Conflict Resolution"
    ],
    color: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
  },
  {
    title: "Leadership",
    icon: Users,
    description: "Strong leadership capabilities in team coordination, project management, and organizational development. Proven track record in leading diverse teams.",
    skills: [
      "Team Leadership",
      "Project Coordination",
      "Strategic Planning", 
      "Decision Making",
      "Mentoring & Development",
      "Change Management"
    ],
    color: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800"
  }
];

export function ExpertiseSection() {
  return (
    <section className="section-padding section-bg">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Core Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars of professional excellence that drive successful outcomes 
            in social work and community development projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={area.title}
              className={`card-hover-effect border-2 ${area.color}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-center mb-4">
                    Key Competencies
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                        style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    <span>8+ Years Experience</span>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Expert Level</span>
                  </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  FileText, 
  Database, 
  MessageSquare, 
  Target, 
  Briefcase,
  BarChart,
  Settings,
  Code,
  Sheet,
  Cloud
} from "lucide-react";

const skills = [
  {
    name: "KoboToolbox Expertise",
    icon: Database,
    level: 95,
    description: "Advanced proficiency in KoboToolbox for data collection and case management"
  },
  {
    name: "Google Apps Scripts",
    icon: Code,
    level: 88,
    description: "Automation and custom solutions using Google Apps Script development"
  },
  {
    name: "Advanced Excel & Sheets",
    icon: Sheet,
    level: 92,
    description: "Complex formulas, data analysis, dashboard creation, and automation"
  },
  {
    name: "Team Coordination and Leadership",
    icon: Users,
    level: 90,
    description: "Leading teams and coordinating cross-functional projects"
  },
  {
    name: "Documentation and Report Writing",
    icon: FileText,
    level: 88,
    description: "Professional documentation and comprehensive reporting"
  },
  {
    name: "Data Analysis & Visualization",
    icon: BarChart,
    level: 85,
    description: "Statistical analysis, dashboard creation, and data visualization"
  },
  {
    name: "Workshop and Training Facilitation",
    icon: MessageSquare,
    level: 87,
    description: "Conducting workshops and training sessions on digital tools"
  },
  {
    name: "Program Coordination",
    icon: Target,
    level: 85,
    description: "Field implementation and stakeholder engagement"
  },
  {
    name: "Client Communication",
    icon: Briefcase,
    level: 90,
    description: "Building strong client relationships and issue resolution"
  },
  {
    name: "Cloud-based Solutions",
    icon: Cloud,
    level: 83,
    description: "Google Workspace, cloud storage, and collaborative platforms"
  },
  {
    name: "Microsoft Office Suite",
    icon: Settings,
    level: 89,
    description: "Advanced skills in Word, PowerPoint, and Office integrations"
  },
  {
    name: "Case Management Systems",
    icon: Database,
    level: 92,
    description: "Digital case management, tracking, and reporting systems"
  }
];

export function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Professional Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set developed through 8+ years of experience in social work, 
            project management, community development, and digital technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="card-hover-effect group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-semibold mb-2 text-foreground">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>
                
                {/* Skill Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
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
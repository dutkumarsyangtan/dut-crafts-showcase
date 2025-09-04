import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Documentation Officer",
    company: "CWIN-Nepal",
    location: "Present",
    period: "Current Position",
    type: "Full-time",
    responsibilities: [
      "Collect and Manage Project data using advanced digital tools",
      "Develop and Manage Case Management Forms using KoboToolbox",
      "Create automated reports using Google Apps Scripts",
      "Design Excel dashboards and advanced data analysis",
      "Manage Archives and digital Records systems", 
      "Implement prevention and rehabilitation best Practices",
      "Develop process improvements using technology",
      "Document project activities and create impact visualizations"
    ],
    achievements: [
      "Streamlined documentation processes with 40% efficiency gain",
      "Automated data collection reducing manual work by 60%",
      "Created 15+ interactive Excel dashboards",
      "Trained 25+ staff members on KoboToolbox usage"
    ]
  },
  {
    title: "Project Officer",
    company: "CWIN-Nepal",
    location: "2021 to 2024",
    period: "3 Years",
    type: "Full-time", 
    responsibilities: [
      "Oversee and manage projects from start to finish, setting timelines, budgets, and goals",
      "Coordinate with team members and stakeholders to ensure timely and on-budget project completion",
      "Identify and address issues or challenges that arise during projects",
      "Track project progress and ensure quality control to deliver successful outcomes",
      "Communicate with stakeholders to keep them informed about progress",
      "Evaluate project outcomes and present findings to the team"
    ],
    achievements: [
      "Successfully managed 40+ projects with digital tracking",
      "Achieved 95% on-time delivery rate using project dashboards",
      "Reduced project costs by 15% through process automation",
      "Implemented KoboToolbox across 10+ project sites"
    ]
  },
  {
    title: "Field and Social Mobilizer",
    company: "CWIN-Nepal",
    location: "2017 - 2021",
    period: "4 Years",
    type: "Full-time",
    responsibilities: [
      "Online Data Entry and digital Ledger Management",
      "Program Coordination and automated Issue Form Updates",
      "Data Collection using mobile and digital tools",
      "Community Outreach and digital communication",
      "Support Families and Children with tech-enabled services",
      "Facilitate networking activities using digital platforms",
      "Monitor, Report and create automated dashboards"
    ],
    achievements: [
      "Digitized data collection for 800+ families in rural communities",
      "Established 15+ digital community networks",
      "Created automated reporting systems",
      "Trained communities on digital tool usage"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="section-padding section-bg">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8+ years of dedicated service in social work, project management, 
            and community development at CWIN-Nepal with advanced technical expertise.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="card-hover-effect"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MessageCircle } from "lucide-react";

const languages = [
  {
    name: "Nepali",
    level: "Native",
    proficiency: 100,
    description: "Mother tongue with full fluency in speaking, reading, and writing",
    flag: "🇳🇵"
  },
  {
    name: "English", 
    level: "Professional",
    proficiency: 85,
    description: "Professional working proficiency in business and technical communication",
    flag: "🇺🇸"
  },
  {
    name: "Hindi",
    level: "Conversational", 
    proficiency: 75,
    description: "Good conversational ability for cross-cultural communication",
    flag: "🇮🇳"
  }
];

export function LanguagesSection() {
  return (
    <section className="section-padding section-bg">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Languages
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multilingual communication skills that enable effective collaboration 
            across diverse communities and international partners.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {languages.map((language, index) => (
              <Card 
                key={language.name}
                className="card-hover-effect text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{language.flag}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {language.name}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className="mb-4"
                  >
                    {language.level}
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {language.description}
                  </p>

                  {/* Proficiency Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-medium">{language.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${language.proficiency}%`,
                          animationDelay: `${index * 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Communication Skills Highlight */}
          <Card className="card-hover-effect">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Cross-Cultural Communication
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Professional Applications
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Community outreach and engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">International project coordination</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Training and workshop facilitation</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Documentation and reporting</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Strengths</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Effective translation and interpretation</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Cultural sensitivity and awareness</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Multilingual documentation abilities</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Bridge communication across communities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
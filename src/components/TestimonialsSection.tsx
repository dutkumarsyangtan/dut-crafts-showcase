import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jhabindra Gyawali",
    role: "Manager, CWIN-Nepal",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "Dut Kumar has been an exceptional team member with outstanding dedication to social work over the past 8+ years. His technical expertise in KoboToolbox and data automation has revolutionized our project documentation. His ability to integrate digital solutions with field work is remarkable and his leadership in technical training is invaluable to our organization.",
    email: "jhabindra.cwin@gmail.com",
    phone: "+977 9855029630"
  },
  {
    name: "Sarah Johnson",
    role: "Project Coordinator, International NGO",
    avatar: "/api/placeholder/80/80", 
    rating: 5,
    testimonial: "Working with Dut has been a pleasure. His communication skills and ability to coordinate with multiple stakeholders make him an excellent project officer. He consistently delivers high-quality work and maintains strong relationships with community members.",
    email: "sarah.johnson@ngo.org",
    phone: "+977 9841234567"
  },
  {
    name: "Ram Bahadur Shrestha",
    role: "Community Leader, Local Government",
    avatar: "/api/placeholder/80/80",
    rating: 5, 
    testimonial: "Dut Kumar's work in our community has been transformative. His approach to social mobilization is both professional and compassionate. He has helped implement several successful programs that have directly benefited hundreds of families in our area.",
    email: "ram.shrestha@gov.np",
    phone: "+977 9876543210"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Social Work Consultant",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    testimonial: "Dut's technical expertise in KoboToolbox and Google Apps Scripts sets him apart in the field. He has consistently shown initiative in digital process improvements and has been instrumental in training other team members on advanced Excel techniques. His ability to bridge technology with social work is truly inspiring and has transformed our data management approach.",
    email: "dr.priya@consultant.com", 
    phone: "+977 9812345678"
  }
];

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Client Reviews & Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from colleagues, supervisors, and community partners about our collaborative work 
            and the impact we've made together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="card-hover-effect relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {testimonial.email} • {testimonial.phone}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">80+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
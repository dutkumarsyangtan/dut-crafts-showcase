import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="
      section-padding 
      bg-blue-200 dark:bg-gradient-to-br dark:from-black dark:via-gray-800 dark:to-yellow-900
      transition-colors duration-1000
    ">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover-effect bg-white dark:bg-gray-900 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                With 8+ years of social work experience at CWIN-Nepal, I am an enthusiastic,
                responsible, and reliable professional with strong office management and
                communication skills. I thrive in team environments and work well under
                pressure, effectively addressing problems and negotiating beneficial agreements.
              </p>

              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                As a caring professional with expertise in case management, digital tools, and client advocacy,
                I am committed to helping individuals achieve their goals by connecting them
                with necessary resources and leveraging technology for efficient solutions,
                making me a valuable addition to any organization.
              </p>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">90+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Communities Served</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <ReferencesSection />
      <LanguagesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

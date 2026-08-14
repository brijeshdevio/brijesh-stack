import { Toaster } from "sonner";
import NavbarLayout from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/Skills";
import HowIWorkSection from "@/components/sections/HowIWork";
import TestimonialsSection from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/Contact";
import FooterLayout from "@/components/layout/Footer";
import "@/App.css";

export function App() {
  return (
    <>
      <NavbarLayout />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <HowIWorkSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterLayout />
      <Toaster />
    </>
  );
}

export default App;

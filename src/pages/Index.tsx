import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import OngoingProjects from "@/components/OngoingProjects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <OngoingProjects />
      <TechStack />
      <Experience />
      <Testimonials />
      <Achievements />
      <Education />
      <Blog />
      <About />
      <Contact />
    </div>
  );
};

export default Index;

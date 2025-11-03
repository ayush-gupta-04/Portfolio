import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary-foreground/20 rounded-lg animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-primary-foreground/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-4 border-primary-foreground/20 rotate-45 animate-float" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-4 border-primary-foreground/25 rounded-lg animate-float-delayed" />
        <div className="absolute top-1/2 right-10 w-36 h-36 border-4 border-primary-foreground/15 rounded-full animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Name Here
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold animate-fade-in">
            Full Stack Developer | CS Student | Tech Enthusiast
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Passionate about building scalable web applications and solving complex problems. 
            Currently pursuing Computer Science and seeking opportunities to create impact through technology.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-4 justify-center animate-fade-in">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:your.email@example.com"
               className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

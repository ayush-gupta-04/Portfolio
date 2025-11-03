import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    image: "/placeholder.svg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses, user authentication, and message encryption.",
    image: "/placeholder.svg",
    techStack: ["Next.js", "OpenAI", "PostgreSQL", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with drag-and-drop interface, team collaboration, and analytics.",
    image: "/placeholder.svg",
    techStack: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 gradient-section">
        <div className="absolute top-10 right-20 w-64 h-64 border-2 border-primary/10 rounded-full" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-accent/10 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work - from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-smooth bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.liveUrl && (
                  <Button className="flex-1 gradient-primary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

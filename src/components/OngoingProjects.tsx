import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Loader2 } from "lucide-react";

interface OngoingProject {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  status: "In Progress" | "Planning" | "Testing";
}

const ongoingProjects: OngoingProject[] = [
  {
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparency and security using blockchain technology.",
    techStack: ["Solidity", "React", "Web3.js", "Ethereum"],
    githubUrl: "#",
    status: "In Progress",
  },
  {
    title: "ML-Powered Code Reviewer",
    description: "AI tool that analyzes code quality, suggests improvements, and detects potential bugs.",
    techStack: ["Python", "TensorFlow", "FastAPI", "Docker"],
    githubUrl: "#",
    status: "Testing",
  },
];

const OngoingProjects = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 bg-secondary/30">
        <div className="absolute top-20 left-10 w-56 h-56 border-2 border-accent/20 rounded-lg rotate-12" />
        <div className="absolute bottom-10 right-20 w-40 h-40 border-2 border-primary/15 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What I'm Currently Building</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring new technologies and pushing boundaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ongoingProjects.map((project, index) => (
            <Card key={index} className="shadow-card bg-card/90 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="border-accent text-accent">
                    <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.githubUrl && (
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;

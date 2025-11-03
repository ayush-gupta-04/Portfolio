import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCategory {
  category: string;
  skills: string[];
}

const techStack: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Django", "TailwindCSS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "Postman", "Linux"],
  },
];

const TechStack = () => {
  return (
    <section className="py-20 relative overflow-hidden gradient-section">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 border-2 border-primary/10 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/4 w-52 h-52 border-2 border-accent/10 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, index) => (
            <Card key={index} className="shadow-card bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-smooth">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

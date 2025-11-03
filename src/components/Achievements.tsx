import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  date: string;
  type: "award" | "certification";
}

const achievements: Achievement[] = [
  {
    title: "1st Place - University Hackathon 2024",
    description: "Built an AI-powered study assistant that won first place among 50+ teams",
    date: "March 2024",
    type: "award",
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Associate level certification validating cloud architecture skills",
    date: "January 2024",
    type: "certification",
  },
  {
    title: "Google Code Jam - Top 500",
    description: "Ranked in top 500 globally in competitive programming competition",
    date: "August 2023",
    type: "award",
  },
  {
    title: "Meta Frontend Developer Certificate",
    description: "Professional certificate in modern frontend development",
    date: "July 2023",
    type: "certification",
  },
];

const Achievements = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 bg-secondary/30">
        <div className="absolute top-10 right-20 w-72 h-72 border-2 border-primary/10 rounded-full" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-accent/10 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and continuous learning milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-card bg-card/90 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {achievement.type === "award" ? (
                      <Trophy className="h-6 w-6 text-primary" />
                    ) : (
                      <Award className="h-6 w-6 text-accent" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <Badge variant="outline" className="ml-2">
                        {achievement.date}
                      </Badge>
                    </div>
                    <CardDescription>{achievement.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    company: "Tech Company XYZ",
    period: "Summer 2024",
    responsibilities: [
      "Developed and deployed microservices handling 10K+ daily requests",
      "Optimized database queries reducing response time by 40%",
      "Collaborated with cross-functional teams in Agile environment",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Startup ABC",
    period: "Jan 2024 - Present",
    responsibilities: [
      "Built responsive web applications using React and TypeScript",
      "Implemented CI/CD pipelines improving deployment efficiency by 50%",
      "Mentored junior developers on best practices and code reviews",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 bg-secondary/20">
        <div className="absolute top-20 right-10 w-60 h-60 border-2 border-primary/10 rounded-lg rotate-12" />
        <div className="absolute bottom-10 left-20 w-44 h-44 border-2 border-accent/15 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building real-world solutions and gaining industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ml-16">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

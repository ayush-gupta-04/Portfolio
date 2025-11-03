import { Card, CardContent } from "@/components/ui/card";
import { Code2, Gamepad2, Music, Book } from "lucide-react";

const About = () => {
  const hobbies = [
    { icon: Code2, label: "Open Source" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Music, label: "Music" },
    { icon: Book, label: "Reading" },
  ];

  return (
    <section className="py-20 relative overflow-hidden gradient-section">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 border-2 border-primary/10 rounded-full" />
        <div className="absolute bottom-10 left-20 w-52 h-52 border-2 border-accent/10 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond the code - who I am and what drives me
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-card bg-card/80 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  I'm a passionate Computer Science student with a deep love for technology and problem-solving. 
                  My journey in tech started with curiosity about how things work, and it has evolved into a 
                  commitment to building solutions that make a real impact.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest technologies. Whether it's 
                  exploring new frameworks, contributing to open-source projects, or tackling challenging algorithmic 
                  problems, I'm always eager to expand my skill set and push my boundaries. My goal is to leverage 
                  technology to create innovative solutions that solve real-world problems and improve people's lives.
                </p>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hobbies.map((hobby, index) => (
                <Card key={index} className="shadow-card bg-card/90 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-smooth">
                  <CardContent className="pt-6 text-center">
                    <hobby.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-foreground">{hobby.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 relative overflow-hidden gradient-section">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-60 h-60 border-2 border-accent/10 rounded-lg rotate-12" />
        <div className="absolute bottom-10 right-1/4 w-44 h-44 border-2 border-primary/15 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">Bachelor of Science in Computer Science</CardTitle>
                  <CardDescription className="text-lg mb-4">
                    Your University Name
                  </CardDescription>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-semibold text-foreground">Expected Graduation:</span> May 2025</p>
                    <p><span className="font-semibold text-foreground">GPA:</span> 3.8/4.0</p>
                    <p><span className="font-semibold text-foreground">Relevant Coursework:</span> Data Structures & Algorithms, 
                    Database Systems, Web Development, Machine Learning, Software Engineering</p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "One of the most dedicated and talented students I've had. Shows exceptional problem-solving skills and leadership qualities.",
    author: "Dr. Jane Smith",
    title: "Professor of Computer Science",
  },
  {
    quote: "Delivered high-quality code consistently and was always eager to learn new technologies. A valuable addition to any team.",
    author: "John Doe",
    title: "Senior Software Engineer at Tech Corp",
  },
  {
    quote: "Demonstrated strong technical skills and excellent communication. Successfully led a team project that exceeded expectations.",
    author: "Sarah Johnson",
    title: "CTO at Startup XYZ",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden gradient-section">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary/10 rotate-45" />
        <div className="absolute bottom-10 right-10 w-56 h-56 border-2 border-accent/10 rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Others Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from mentors, professors, and colleagues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-smooth">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

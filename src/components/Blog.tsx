import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for enterprise-level applications.",
    date: "Oct 15, 2024",
    tags: ["Node.js", "Microservices", "DevOps"],
    readTime: "8 min read",
  },
  {
    title: "Advanced React Patterns for 2024",
    excerpt: "Exploring modern React patterns including Server Components, Suspense, and the latest hooks to write cleaner, more performant code.",
    date: "Oct 8, 2024",
    tags: ["React", "JavaScript", "Web Dev"],
    readTime: "6 min read",
  },
  {
    title: "Introduction to Machine Learning with Python",
    excerpt: "A beginner-friendly guide to understanding ML concepts and building your first predictive model using scikit-learn and TensorFlow.",
    date: "Sep 28, 2024",
    tags: ["Python", "ML", "AI"],
    readTime: "10 min read",
  },
];

const Blog = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 bg-secondary/20">
        <div className="absolute top-10 left-10 w-56 h-56 border-2 border-primary/10 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 border-2 border-accent/10 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights about technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="shadow-card bg-card/90 backdrop-blur-sm border-primary/20 hover:shadow-glow transition-smooth flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gradient-primary text-primary-foreground border-0">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

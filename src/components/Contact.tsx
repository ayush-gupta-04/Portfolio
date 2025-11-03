import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Instagram, Code2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Code2, label: "LeetCode", url: "https://leetcode.com" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 bg-secondary/30">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-primary/10 rounded-lg rotate-12" />
        <div className="absolute bottom-20 right-20 w-56 h-56 border-2 border-accent/10 rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="shadow-card bg-card/90 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-card bg-card/90 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-card/90 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth"
                    >
                      <link.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

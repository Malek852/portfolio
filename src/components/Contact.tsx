import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    setIsSubmitting(true);

    // Open mailto with pre-filled data
    const mailtoLink = `mailto:malek.beyrem@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;
    window.open(mailtoLink, "_blank");

    toast({
      title: "Opening your email client!",
      description: "Your message has been pre-filled in your email app.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:beyremmalek@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group p-4 bg-card rounded-xl border border-border hover:border-primary/30"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Email</p>
                      <span className="text-foreground">beyremmalek@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Location</p>
                      <span className="text-foreground">Tunisia</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Malek852"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/malek-beyrem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card rounded-xl p-4 border border-border">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>💬 Quick Response: I typically respond within 24-48 hours.</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Your Name *
                  </label>
                  <Input id="name" name="name" placeholder="Jane Doe" required className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Your Email *
                  </label>
                  <Input id="email" name="email" type="email" placeholder="jane@example.com" required className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                    Subject *
                  </label>
                  <Input id="subject" name="subject" placeholder="What's this about?" required className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message *
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required className="bg-secondary border-border" />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

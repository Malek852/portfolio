import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Award, MapPin } from "lucide-react";

const education = [
  {
    degree: "Software Engineering Degree",
    school: "Higher Institute of Computer Science - ISI",
    period: "2023 - 2025",
    note: "Completed",
  },
  {
    degree: "Master’s Degree M1 in Data Science and Software Development",
    school: "Higher School of Digital Economy - ESEN",
    period: "2022 - 2023",
    note: "Completed",
  },
  {
    degree: "Bachelor's Degree in Business Intelligence",
    school: "Higher School of Digital Economy - ESEN",
    period: "2019 - 2022",
    note: "Completed",
  },
];

const certifications = [
  {
    title: "Azure AI - 900 Fundamentals - Microsoft",
    issuer: "Microsoft",
    date: "April 2024",
    color: "from-yellow-400 to-orange-500", // Microsoft (jaune/orange 🔥)
    icon: "/Microsoft_logo.png"
  },
  {
    title: "Azure Devops Boards",
    issuer: "Coursera",
    date: "01/2023",
    color: "from-blue-500 to-blue-700", // bleu marine 💙
    icon: "/Microsoft-Azure.png"
  },
  {
    title: "Introduction to Python",
    issuer: "Gomycode",
    date: "2020",
    color: "from-pink-500 to-red-500",
    icon: "/gomycode.jpg"
  },
  {
    title: "Leadership and Emotional Intelligence",
    issuer: "Coursera",
    date: "04/2021",
    color: "from-blue-800 to-blue-950", // même branding Coursera
    icon: "/logo_c.png"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Software Engineer from Tunisia, passionate about building beautiful and functional web applications.
              I love turning ideas into reality through clean code and creative problem-solving.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Tunisia</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-primary mt-1">{edu.period}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-card rounded-2xl p-8 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="relative rounded-xl p-4 bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-secondary shrink-0">
                        <img
                          src={cert.icon}
                          alt={cert.title}
                          className="h-8 w-8 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                        <p className="text-xs text-primary mt-1">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

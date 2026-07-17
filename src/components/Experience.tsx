import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "IA Engineer",
    company: "Oolab Tunisia",
    period: "Feb 2025 - July 2025",
    description:
      "Developing a Plugin with AI-powered features To Automate Detection of broken Selectors in a suite of Test.",
    technologies: ["Flask", "LLMs", "Postman","Python","Gitlab"],
  },
  {
    title: "Data Analyst Intern",
    company: "Elite Council Consulting",
    period: "Jun 2024 - Aug 2024",
    description:
      "Developed a platform for intelligent CV analysis.",
    technologies: ["Python","Pandas", "Regex", "CRISP-DM", "HTML5", "CSS3","MySQL"],
  },
  {
    title: "BI Developer Intern",
    company: "Air Liquide Tunisia",
    period: "feb 2022 - Mar 2022",
    description:
      "Implementation of a decision-making solution for sales management",
    technologies: ["PowerBI", "TalendStudio", "MySQL", "ETL"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16">
            My journey through internships and freelance work, building real-world solutions
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.title + exp.company} delay={index * 0.15}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{exp.company}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

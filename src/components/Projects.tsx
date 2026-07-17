import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { Github, ChevronDown, ChevronUp, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [

  {
    title: "ATS system for managing jobs",
    subtitle: "Full Stack",
    company: " ECC",
    description:
      "Design and implementation of a full-stack web platform (MongoDB,Express, React, Node.js) for course management, user authentication, role management, and tracking learners’ progress.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/",
    type: "Full-Stack",
    year: "2024",
    category: "professional",
    images: ["/screens/01_Login_Page.png", "/screens/02_Admin_Dashboard.png", "/screens/03_Job_Management.png","/screens/04_Candidates_List.png","/screens/05_Candidate_Details.png","/screens/06_Candidate_Pipeline.png","/screens/07_Analytics_Reports.png","/screens/08_All_Candidates_Overview.png","/screens/09_Admin_Settings.png"],
  },
  {
    title: "E-commerce Full Stack Project",
    subtitle: "Marketplace Platform",
    company: "private",
    description:
      "Development of an e-commerce website with product management, shopping cart, online payment, and admin interface.",
    technologies: ["Spring Boot", "Angular", "MySQL", "JWT", "Docker"],
    github: "https://github.com/",
    type: "Full-Stack",
    year: "2025",
    category: "professional",
    images: ["/2.png", "/1.png", "3.png","/4.png","/5.png","/6.png","/7.png","/8.png","/9.png"],
  },
  {
    title: "LMS Website",
    subtitle: "MERN Stack",
    company: " ECC",
    description:
      "Design and implementation of a full-stack web platform (MongoDB,Express, React, Node.js) for course management, user authentication, role management, and tracking learners’ progress.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/",
    type: "Full-Stack",
    year: "2024",
    category: "professional",
    images: ["/lms1.png", "/lms2.png", "/lmsr.png","/lms5.png","/final_course.png","/lms6.png","/lms7.png","dashboard.png"],
  },
  
  {
    title: "Intelligent Chatbot based on RAG and LLMs",
    subtitle: "IA medical Assistant",
    company: "Tunisie",
    description:
      "Development of a chatbot capable of answering questions related to diseases, treatments, and medical recommendations using RAG techniques combined with large language models.",
    technologies: ["Flask", "Python", "Bootstrap", "LLMS","RAG","OpenIA"],
    github: "https://github.com/",
    type: "Data Analytics",
    year: "2025",
    category: "professional",
    images: ["/med1.png", "/med2.png"],
  },
  {
    title: "Road Violation Detection ",
    subtitle: "Deep Learning Project",
    company: "Educational Project",
    description:
      "Development of a chatbot capable of answering questions related to diseases, treatments, and medical recommendations using RAG techniques combined with large language models.",
    technologies: ["Django", "Python", "YOLOV8", ""],
    github: "https://github.com/",
    type: "Data Analytics",
    year: "2025",
    category: "professional",
    images: ["/violation_det1.png", "/viol_det2.png", "/violdet3.png"],
  },
];

const ProjectCard = ({
  project,
  index,
  onImageClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onImageClick: (images: string[]) => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group">
        {/* Color bar */}
        <div className="h-1 bg-gradient-to-r from-primary to-primary/50" />

        {/* Project Image with hover zoom */}
        <div
          className="relative cursor-pointer overflow-hidden"
          onClick={() => onImageClick(project.images)}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-3">
            <div className="flex gap-3">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {project.type}
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                {project.year}
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-1">{project.subtitle}</p>
          <p className="text-primary/80 text-sm mb-4">{project.company}</p>

          <p
            className={`text-muted-foreground leading-relaxed mb-5 ${
              !expanded ? "line-clamp-3" : ""
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies
              .slice(0, expanded ? undefined : 4)
              .map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground font-mono"
                >
                  {tech}
                </span>
              ))}
            {!expanded && project.technologies.length > 4 && (
              <span className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
            >
              {expanded ? "Show Less" : "Show More"}{" "}
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"professional" | "freelance">("professional");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  const handleImageClick = (images: string[]) => {
    setActiveImages(images);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
            A showcase of projects I've built, featuring full-stack applications
            with modern technologies and AI integration
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.category === activeTab)
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onImageClick={handleImageClick}
              />
            ))}
        </div>
      </div>

      {/* Full-screen lightbox modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            onClick={() => setModalOpen(false)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="w-full max-w-5xl px-4 md:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel className="w-full">
              <CarouselContent>
                {activeImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <img
                      src={img}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:-left-4 text-white border-white hover:bg-white hover:text-black disabled:opacity-30" />
              <CarouselNext className="right-2 md:-right-4 text-white border-white hover:bg-white hover:text-black disabled:opacity-30" />
            </Carousel>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;


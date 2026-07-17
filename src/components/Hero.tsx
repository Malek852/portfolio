import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-primary/10 top-0 left-1/4" />
      <div className="glow-orb w-80 h-80 bg-accent/20 bottom-1/4 right-1/4" />
      <div className="glow-orb w-64 h-64 bg-primary/5 top-1/2 left-1/2" />

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20 mt-16">
            <img src={profileImg} alt="Malek Beyrem" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary font-medium text-lg mb-4"
        >
          Hi! I'm Malek Beyrem 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
           className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text whitespace-nowrap">
           Software Engineer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about AI and software development — I build intelligent solutions that solve real-world problems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-3 gradient-btn text-primary-foreground font-medium rounded-full hover:brightness-110 transition-all flex items-center gap-2"
          >
            contact me <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-all flex items-center gap-2"
          >
            my resume <Download className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/MalekBeyrem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/malek-beyrem/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:beyremmalek@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-primary animate-bounce inline-block">
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

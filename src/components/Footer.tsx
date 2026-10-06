import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import logoMe from "@/assets/logo_me.png";
import logoMeDark from "@/assets/logo_me_dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={isDark ? logoMeDark : logoMe} alt="Malek Beyrem Logo" className="h-14 w-auto" />
            <span className="text-muted-foreground text-sm">
              © {currentYear} Malek Beyrem. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Malek852" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/malek-beyrem/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:malek.beyrem@email.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

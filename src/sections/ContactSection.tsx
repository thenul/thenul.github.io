import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-background py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 font-['Space_Grotesk'] text-primary">Get in touch</h2>
        
        <div className="flex items-center gap-8 mb-12">
          <a
            href="#"
            className="p-3 rounded-full bg-secondary border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 glow-primary-hover transition-all"
            aria-label="GitHub"
            data-testid="link-github"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 glow-primary-hover transition-all"
            aria-label="LinkedIn"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:thenul@example.com"
            className="p-3 rounded-full bg-secondary border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/50 glow-primary-hover transition-all"
            aria-label="Email"
            data-testid="link-email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground/50 font-mono">
          © 2025 Thenul De Mel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

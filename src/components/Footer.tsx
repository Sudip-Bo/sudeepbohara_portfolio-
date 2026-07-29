"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-2 text-foreground py-16 px-6 border-t border-border-subdued">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sudip Bohara</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Web Designer • Web Developer • UI/UX Designer. I help businesses
              build trust and grow through premium digital experiences.
            </p>
            <p className="text-accent-cyan text-sm mb-6 italic">
              &quot;A website is like water—essential for every modern business.&quot;
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/sudeepbohara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-1 rounded-lg flex items-center justify-center hover:bg-border-highlight transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/sudeepbohara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-1 rounded-lg flex items-center justify-center hover:bg-border-highlight transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/sudeepbohara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-1 rounded-lg flex items-center justify-center hover:bg-border-highlight transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:sudeepbohara@gmail.com"
                className="w-10 h-10 bg-surface-1 rounded-lg flex items-center justify-center hover:bg-border-highlight transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Website Design
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Landing Pages
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Website Redesign
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  SEO Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subdued flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sudip Bohara. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

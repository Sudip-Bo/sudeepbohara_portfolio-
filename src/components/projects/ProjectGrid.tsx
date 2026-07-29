"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string | null;
  imageUrl: string | null;
  tags: string[];
  slug: string;
}

export function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects?published=true')
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-surface-1">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-surface-2 rounded-3xl h-96 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="py-24 px-6 bg-surface-1">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">New case studies coming soon.</p>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-surface-1">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ stiffness: 100, damping: 20, delay: index * 0.1 }}
              className="bg-surface-2 rounded-3xl overflow-hidden border border-border-subdued hover:border-border-highlight hover:shadow-xl will-change-transform"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      loading="lazy"
                      className="object-cover hover:scale-105 will-change-transform"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-1 flex items-center justify-center">
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-sm font-medium text-accent-cyan mb-3">
                    {project.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 display-tight">
                    {project.title}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                    {project.description}
                  </p>

                  {project.content && (
                    <div className="mb-8">
                      <div 
                        className="text-muted-foreground prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: project.content }}
                      />
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="font-bold text-foreground mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface-1 text-foreground text-sm rounded-full border border-border-subdued"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-indigo text-white font-medium rounded-xl hover:bg-opacity-90 transition-all"
                  >
                    View Project Details
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string | null;
  slug: string;
}

const fallbackProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    imageUrl: null,
    slug: 'ecommerce-platform',
  },
  {
    id: '2',
    title: 'Healthcare Portal',
    category: 'Web Design',
    imageUrl: null,
    slug: 'healthcare-portal',
  },
  {
    id: '3',
    title: 'SaaS Dashboard',
    category: 'Web Application',
    imageUrl: null,
    slug: 'saas-dashboard',
  },
];

export function FeaturedWork() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects?published=true')
      .then(res => res.json())
      .then(data => {
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects.slice(0, 3)); // Show only first 3
        } else {
          setProjects(fallbackProjects);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setProjects(fallbackProjects);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-surface-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-12 bg-surface-2 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-surface-2 rounded-lg w-96 mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-surface-2 rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return null;
  }
  return (
    <section className="py-20 px-6 bg-surface-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 display-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Selected work demonstrating design precision and technical execution
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl bg-surface-2 shadow-sm hover:shadow-xl will-change-transform border border-border-subdued"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 will-change-transform"
                  />
                ) : (
                  <div className="w-full h-full bg-surface-1 flex items-center justify-center">
                    <span className="text-muted-foreground">No image</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-accent-secondary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  View Project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ stiffness: 100, damping: 20 }}
          whileHover={{ y: -4 }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface-2 border border-border-subdued rounded-xl hover:border-border-highlight transition-all font-medium text-foreground"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

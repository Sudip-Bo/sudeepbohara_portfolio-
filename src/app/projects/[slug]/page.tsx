import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Image from "next/image";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      select: { slug: true },
    });

    return projects.map((project) => ({
      slug: project.slug,
    }));
  } catch (error) {
    // If database is unavailable during build (e.g., Vercel build),
    // return empty array to make the route dynamic instead of static.
    // This ensures the build succeeds while preserving functionality.
    console.error('Database unavailable during build:', error);
    return [];
  }
}

// Allow dynamic rendering as fallback when static generation fails
export const dynamic = 'auto';

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    return {
      title: "Project Not Found | Sudip Bohara",
    };
  }

  return {
    title: `${project.title} | Sudip Bohara`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-medium text-accent-secondary mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 display-tight">
              {project.title}
            </h1>
            <p className="text-xl text-secondary max-w-3xl">
              {project.description}
            </p>
          </div>

          {project.imageUrl && (
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-border-subdued relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {project.content && (
            <div className="prose prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>
          )}

          <div className="border-t border-border-subdued pt-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-surface-2 text-foreground text-sm rounded-full border border-border-subdued"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-2 text-foreground font-medium rounded-xl hover:bg-surface-1 transition-all border border-border-subdued"
            >
              Back to Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-medium rounded-xl hover:bg-opacity-90 transition-all"
            >
              Start Similar Project
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

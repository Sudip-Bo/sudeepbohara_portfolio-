import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'

export default async function NewProjectPage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">New Project</h1>
            <p className="text-muted-foreground mt-2">Create a new portfolio project</p>
          </div>
          <a href="/admin/projects" className="text-accent-indigo hover:text-accent-cyan transition-colors">
            ← Back to Projects
          </a>
        </div>

        <form action="/api/projects" method="POST" className="bg-surface-1 border border-border-subdued rounded-xl p-8 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
              placeholder="Project title"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-foreground mb-2">
              Slug *
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              required
              pattern="[a-z0-9-]+"
              className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
              placeholder="project-slug"
            />
            <p className="text-sm text-muted-foreground mt-1">URL-friendly identifier (lowercase, hyphens only)</p>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
              Category *
            </label>
            <input
              type="text"
              id="category"
              name="category"
              required
              className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
              placeholder="e.g., Healthcare, E-commerce"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all resize-none"
              placeholder="Brief project description"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-foreground mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={8}
              className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all resize-none"
              placeholder="Detailed project content (supports HTML)"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-foreground mb-2">
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-foreground mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
              placeholder="Next.js, TypeScript, Tailwind (comma-separated)"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="featured" className="w-4 h-4 rounded border-border-subdued bg-surface-2 text-accent-indigo focus:ring-accent-indigo" />
              <span className="text-sm font-medium text-foreground">Featured Project</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="published" defaultChecked className="w-4 h-4 rounded border-border-subdued bg-surface-2 text-accent-indigo focus:ring-accent-indigo" />
              <span className="text-sm font-medium text-foreground">Published</span>
            </label>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-accent-indigo text-white font-medium rounded-xl hover:bg-opacity-90 transition-all"
            >
              Create Project
            </button>
            <a
              href="/admin/projects"
              className="px-6 py-3 bg-surface-2 border border-border-subdued text-foreground font-medium rounded-xl hover:border-border-highlight transition-all"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

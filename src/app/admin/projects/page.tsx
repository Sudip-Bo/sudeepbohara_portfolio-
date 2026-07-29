import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'

export default async function ProjectsPage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/admin/login')
  }

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground mt-2">Manage your portfolio projects</p>
          </div>
          <div className="flex gap-4">
            <Link href="/admin" className="text-accent-indigo hover:text-accent-cyan transition-colors">
              ← Dashboard
            </Link>
            <Link
              href="/admin/projects/new"
              className="px-4 py-2 bg-accent-indigo text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Project
            </Link>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="bg-surface-1 border border-border-subdued rounded-xl p-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">No projects yet.</p>
            <Link
              href="/admin/projects/new"
              className="px-6 py-3 bg-accent-indigo text-white rounded-lg hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Your First Project
            </Link>
          </div>
        ) : (
          <div className="bg-surface-1 border border-border-subdued rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-surface-2 border-b border-border-subdued">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Title</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Category</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Featured</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-border-subdued hover:bg-surface-2 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{project.title}</div>
                      <div className="text-sm text-muted-foreground">{project.slug}</div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{project.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.published 
                          ? 'bg-accent-emerald/20 text-accent-emerald' 
                          : 'bg-muted-foreground/20 text-muted-foreground'
                      }`}>
                        {project.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {project.featured ? (
                        <Eye className="w-5 h-5 text-accent-indigo" />
                      ) : (
                        <EyeOff className="w-5 h-5 text-muted-foreground" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/projects/${project.id}/edit`}
                          className="p-2 hover:bg-surface-1 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4 text-foreground" />
                        </Link>
                        <form action={`/api/projects/${project.id}`} method="POST">
                          <input type="hidden" name="_method" value="DELETE" />
                          <button
                            type="submit"
                            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                            title="Delete"
                            onClick={(e) => {
                              if (!confirm('Are you sure you want to delete this project?')) {
                                e.preventDefault()
                              }
                            }}
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

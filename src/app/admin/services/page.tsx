import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Plus, Edit, Trash2, ArrowUp, ArrowDown } from 'lucide-react'

export default async function ServicesPage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/admin/login')
  }

  const services = await prisma.service.findMany({
    orderBy: { order: 'asc' }
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Services</h1>
            <p className="text-muted-foreground mt-2">Manage your service offerings</p>
          </div>
          <div className="flex gap-4">
            <Link href="/admin" className="text-accent-indigo hover:text-accent-cyan transition-colors">
              ← Dashboard
            </Link>
            <Link
              href="/admin/services/new"
              className="px-4 py-2 bg-accent-indigo text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Service
            </Link>
          </div>
        </div>

        {services.length === 0 ? (
          <div className="bg-surface-1 border border-border-subdued rounded-xl p-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">No services yet.</p>
            <Link
              href="/admin/services/new"
              className="px-6 py-3 bg-accent-indigo text-white rounded-lg hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Your First Service
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="bg-surface-1 border border-border-subdued rounded-xl p-6 hover:border-border-highlight transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.published 
                          ? 'bg-accent-emerald/20 text-accent-emerald' 
                          : 'bg-muted-foreground/20 text-muted-foreground'
                      }`}>
                        {service.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <span key={deliverable} className="px-2 py-1 bg-surface-2 text-sm text-muted-foreground rounded">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <form action={`/api/services/${service.id}/order`} method="POST">
                      <input type="hidden" name="direction" value="up" />
                      <button
                        type="submit"
                        className="p-2 hover:bg-surface-2 rounded-lg transition-colors"
                        title="Move Up"
                      >
                        <ArrowUp className="w-4 h-4 text-foreground" />
                      </button>
                    </form>
                    <form action={`/api/services/${service.id}/order`} method="POST">
                      <input type="hidden" name="direction" value="down" />
                      <button
                        type="submit"
                        className="p-2 hover:bg-surface-2 rounded-lg transition-colors"
                        title="Move Down"
                      >
                        <ArrowDown className="w-4 h-4 text-foreground" />
                      </button>
                    </form>
                    <Link
                      href={`/admin/services/${service.id}/edit`}
                      className="p-2 hover:bg-surface-2 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4 text-foreground" />
                    </Link>
                    <form action={`/api/services/${service.id}`} method="POST">
                      <input type="hidden" name="_method" value="DELETE" />
                      <button
                        type="submit"
                        className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                        title="Delete"
                        onClick={(e) => {
                          if (!confirm('Are you sure you want to delete this service?')) {
                            e.preventDefault()
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

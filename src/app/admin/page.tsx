import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import Link from 'next/link'
import { FolderOpen, Briefcase, MessageSquare, Settings, Plus } from 'lucide-react'
import { prisma } from '@/lib/prisma'

export default async function AdminDashboard() {
  const session = await getSession()
  
  if (!session) {
    redirect('/admin/login')
  }

  // Get counts for dashboard
  const [projectCount, serviceCount, messageCount] = await Promise.all([
    prisma.project.count(),
    prisma.service.count(),
    prisma.message.count({ where: { read: false } })
  ])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="px-4 py-2 bg-surface-1 border border-border-subdued rounded-lg text-foreground hover:border-border-highlight transition-all"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/admin/projects" className="bg-surface-1 border border-border-subdued rounded-xl p-6 hover:border-border-highlight hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="w-8 h-8 text-accent-indigo" />
              <span className="text-2xl font-bold text-foreground">{projectCount}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Projects</h3>
            <p className="text-muted-foreground text-sm">Manage your portfolio projects</p>
          </Link>
          
          <Link href="/admin/services" className="bg-surface-1 border border-border-subdued rounded-xl p-6 hover:border-border-highlight hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-4">
              <FolderOpen className="w-8 h-8 text-accent-cyan" />
              <span className="text-2xl font-bold text-foreground">{serviceCount}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Services</h3>
            <p className="text-muted-foreground text-sm">Edit services and offerings</p>
          </Link>
          
          <Link href="/admin/messages" className="bg-surface-1 border border-border-subdued rounded-xl p-6 hover:border-border-highlight hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="w-8 h-8 text-accent-emerald" />
              <span className="text-2xl font-bold text-foreground">{messageCount}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Messages</h3>
            <p className="text-muted-foreground text-sm">View contact form submissions</p>
          </Link>
          
          <Link href="/admin/settings" className="bg-surface-1 border border-border-subdued rounded-xl p-6 hover:border-border-highlight hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-4">
              <Settings className="w-8 h-8 text-muted-foreground" />
              <span className="text-2xl font-bold text-foreground">—</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Settings</h3>
            <p className="text-muted-foreground text-sm">Configure website settings</p>
          </Link>
        </div>

        <div className="bg-surface-1 border border-border-subdued rounded-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Welcome, {session.name || session.email}</h2>
          <p className="text-muted-foreground">
            This is your admin dashboard. Use the cards above to manage your portfolio content.
          </p>
        </div>
      </div>
    </div>
  )
}

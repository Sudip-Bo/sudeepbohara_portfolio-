import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function SettingsPage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/admin/login')
  }

  const settings = await prisma.setting.findMany()

  const settingsMap = settings.reduce((acc, setting) => {
    acc[setting.key] = setting.value
    return acc
  }, {} as Record<string, string>)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-2">Configure website settings</p>
          </div>
          <a href="/admin" className="text-accent-indigo hover:text-accent-cyan transition-colors">
            ← Dashboard
          </a>
        </div>

        <form action="/api/settings" method="POST" className="space-y-6">
          <div className="bg-surface-1 border border-border-subdued rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">General Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="site_name" className="block text-sm font-medium text-foreground mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  id="site_name"
                  name="site_name"
                  defaultValue={settingsMap['site_name'] || 'Sudip Bohara'}
                  className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="site_description" className="block text-sm font-medium text-foreground mb-2">
                  Site Description
                </label>
                <textarea
                  id="site_description"
                  name="site_description"
                  rows={3}
                  defaultValue={settingsMap['site_description'] || ''}
                  className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label htmlFor="contact_email" className="block text-sm font-medium text-foreground mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  defaultValue={settingsMap['contact_email'] || 'sudeepbohara@gmail.com'}
                  className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact_phone" className="block text-sm font-medium text-foreground mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  defaultValue={settingsMap['contact_phone'] || ''}
                  className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-surface-1 border border-border-subdued rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Social Links</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="linkedin_url" className="block text-sm font-medium text-foreground mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  id="linkedin_url"
                  name="linkedin_url"
                  defaultValue={settingsMap['linkedin_url'] || 'https://linkedin.com/in/sudeepbohara'}
                  className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="github_url" className="block text-sm font-medium text-foreground mb-2">
                  GitHub URL
                </label>
                <input
                  type="url"
                  id="github_url"
                  name="github_url"
                  defaultValue={settingsMap['github_url'] || 'https://github.com/sudeepbohara'}
                  className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="twitter_url" className="block text-sm font-medium text-foreground mb-2">
                  Twitter URL
                </label>
                <input
                  type="url"
                  id="twitter_url"
                  name="twitter_url"
                  defaultValue={settingsMap['twitter_url'] || 'https://twitter.com/sudeepbohara'}
                  className="w-full px-4 py-3 rounded-xl border border-border-subdued bg-surface-2 text-foreground focus:border-accent-indigo focus:ring-2 focus:ring-accent-indigo/20 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-accent-indigo text-white font-medium rounded-xl hover:bg-opacity-90 transition-all"
            >
              Save Settings
            </button>
            <a
              href="/admin"
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

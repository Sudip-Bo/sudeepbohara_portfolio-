import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'

export default async function MessagesPage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/admin/login')
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Messages</h1>
            <p className="text-muted-foreground mt-2">View and manage contact form submissions</p>
          </div>
          <a href="/admin" className="text-accent-indigo hover:text-accent-cyan transition-colors">
            ← Back to Dashboard
          </a>
        </div>

        {messages.length === 0 ? (
          <div className="bg-surface-1 border border-border-subdued rounded-xl p-12 text-center">
            <p className="text-muted-foreground text-lg">No messages yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`bg-surface-1 border rounded-xl p-6 transition-all ${
                  message.read ? 'border-border-subdued' : 'border-accent-indigo'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-foreground">{message.name}</h3>
                    <p className="text-sm text-muted-foreground">{message.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(message.createdAt), 'MMM d, yyyy')}
                    </p>
                    {!message.read && (
                      <span className="inline-block mt-1 px-2 py-1 bg-accent-indigo text-white text-xs rounded-full">
                        New
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground mb-2">{message.subject}</p>
                <p className="text-muted-foreground mb-4">{message.message}</p>
                <form action={`/api/messages/${message.id}/read`} method="POST">
                  {!message.read && (
                    <button
                      type="submit"
                      className="px-4 py-2 bg-surface-2 border border-border-subdued rounded-lg text-sm text-foreground hover:border-border-highlight transition-all"
                    >
                      Mark as Read
                    </button>
                  )}
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

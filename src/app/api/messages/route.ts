import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

// GET all messages
export async function GET(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const unread = searchParams.get('unread') === 'true'

    const messages = await prisma.message.findMany({
      where: unread ? { read: false } : undefined,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ messages })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}

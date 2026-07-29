import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

const mediaSchema = z.object({
  filename: z.string().min(1),
  url: z.string().url(),
  mimeType: z.string(),
  size: z.number(),
  alt: z.string().optional(),
})

// GET all media
export async function GET() {
  try {
    const media = await prisma.media.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ media })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch media' },
      { status: 500 }
    )
  }
}

// POST create media
export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const data = mediaSchema.parse(body)

    const media = await prisma.media.create({
      data,
    })

    return NextResponse.json({ media }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create media' },
      { status: 500 }
    )
  }
}

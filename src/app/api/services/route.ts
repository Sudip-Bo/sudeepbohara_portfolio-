import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

const serviceSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200),
  description: z.string().min(1),
  content: z.string().optional(),
  icon: z.string().optional(),
  deliverables: z.array(z.string()),
  published: z.boolean().default(true),
  order: z.number().default(0),
})

// GET all services
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published') === 'true'

    const services = await prisma.service.findMany({
      where: published ? { published: true } : undefined,
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ services })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}

// POST create service
export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    
    const data = {
      title: formData.get('title') as string,
      slug: formData.get('slug') as string,
      description: formData.get('description') as string,
      content: formData.get('content') as string || null,
      icon: formData.get('icon') as string || null,
      deliverables: (formData.get('deliverables') as string || '').split(',').map(t => t.trim()).filter(Boolean),
      published: formData.get('published') === 'on',
      order: parseInt(formData.get('order') as string || '0'),
    }

    const validatedData = serviceSchema.parse(data)

    const service = await prisma.service.create({
      data: validatedData,
    })

    return NextResponse.redirect(new URL('/admin/services', request.url))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    )
  }
}

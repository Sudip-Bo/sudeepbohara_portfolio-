import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

const projectSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200),
  description: z.string().min(1),
  content: z.string().optional(),
  imageUrl: z.string().url().optional(),
  category: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
})

// GET all projects
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published') === 'true'

    const projects = await prisma.project.findMany({
      where: published ? { published: true } : undefined,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ projects })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

// POST create project
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
      imageUrl: formData.get('imageUrl') as string || null,
      category: formData.get('category') as string,
      tags: (formData.get('tags') as string || '').split(',').map(t => t.trim()).filter(Boolean),
      featured: formData.get('featured') === 'on',
      published: formData.get('published') === 'on',
    }

    const validatedData = projectSchema.parse(data)

    const project = await prisma.project.create({
      data: validatedData,
    })

    return NextResponse.redirect(new URL('/admin/projects', request.url))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

const settingSchema = z.object({
  key: z.string().min(1),
  value: z.string(),
  type: z.enum(['string', 'number', 'boolean', 'json']).default('string'),
})

// GET all settings
export async function GET() {
  try {
    const settings = await prisma.setting.findMany({
      orderBy: { key: 'asc' },
    })

    return NextResponse.json({ settings })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    )
  }
}

// POST create or update settings
export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    
    const settingsMap = {
      site_name: formData.get('site_name') as string,
      site_description: formData.get('site_description') as string,
      contact_email: formData.get('contact_email') as string,
      contact_phone: formData.get('contact_phone') as string,
      linkedin_url: formData.get('linkedin_url') as string,
      github_url: formData.get('github_url') as string,
      twitter_url: formData.get('twitter_url') as string,
    }

    // Upsert all settings
    for (const [key, value] of Object.entries(settingsMap)) {
      if (value) {
        await prisma.setting.upsert({
          where: { key },
          update: { value },
          create: { key, value, type: 'string' },
        })
      }
    }

    return NextResponse.redirect(new URL('/admin/settings', request.url))
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save settings' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  service: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10).max(1000),
  honeypot: z.string().optional(),
  subject: z.string().optional()
})

export async function POST(request: Request) {
  try {
    // Rate limiting based on IP address
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const rateLimitResult = rateLimit(ip, 5, 60000) // 5 requests per minute
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, company, service, budget, message, honeypot, subject } = contactSchema.parse(body)

    // Honeypot spam protection
    if (honeypot && honeypot.length > 0) {
      // Silently reject spam submissions
      return NextResponse.json({ success: true, message: 'Message sent successfully' })
    }

    // Save message to database
    await prisma.message.create({
      data: {
        name,
        email,
        message,
        subject: `${service} Inquiry - ${budget}${company ? ` - ${company}` : ''}`,
      }
    })

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'Sudip Bohara Portfolio <onboarding@resend.dev>',
          to: 'sudeepbohara.np@gmail.com',
          subject: subject || 'New Contact Form Submission',
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Continue even if email fails - message is saved to database
      }
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

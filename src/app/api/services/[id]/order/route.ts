import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { direction } = body

    const service = await prisma.service.findUnique({
      where: { id: params.id }
    })

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    if (direction === 'up' && service.order > 0) {
      // Find the service above and swap orders
      const serviceAbove = await prisma.service.findFirst({
        where: { order: { lt: service.order } },
        orderBy: { order: 'desc' }
      })

      if (serviceAbove) {
        await prisma.$transaction([
          prisma.service.update({
            where: { id: serviceAbove.id },
            data: { order: service.order }
          }),
          prisma.service.update({
            where: { id: params.id },
            data: { order: serviceAbove.order }
          })
        ])
      }
    } else if (direction === 'down') {
      // Find the service below and swap orders
      const serviceBelow = await prisma.service.findFirst({
        where: { order: { gt: service.order } },
        orderBy: { order: 'asc' }
      })

      if (serviceBelow) {
        await prisma.$transaction([
          prisma.service.update({
            where: { id: serviceBelow.id },
            data: { order: service.order }
          }),
          prisma.service.update({
            where: { id: params.id },
            data: { order: serviceBelow.order }
          })
        ])
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    )
  }
}

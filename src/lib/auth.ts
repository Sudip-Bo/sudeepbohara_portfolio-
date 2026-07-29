import { cookies } from 'next/headers'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export async function createSession(email: string, password: string) {
  const admin = await prisma.admin.findUnique({
    where: { email }
  })

  if (!admin) {
    return { success: false, error: 'Invalid credentials' }
  }

  const isValid = await bcrypt.compare(password, admin.password)

  if (!isValid) {
    return { success: false, error: 'Invalid credentials' }
  }

  const cookieStore = await cookies()
  cookieStore.set('admin_session', admin.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/'
  })

  return { success: true, admin: { id: admin.id, email: admin.email, name: admin.name } }
}

export async function getSession() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('admin_session')?.value

  if (!sessionId) {
    return null
  }

  const admin = await prisma.admin.findUnique({
    where: { id: sessionId },
    select: { id: true, email: true, name: true }
  })

  return admin
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

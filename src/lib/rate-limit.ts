// Simple in-memory rate limiter for development
// For production, consider using Upstash Redis or similar

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

export function rateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000 // 1 minute default
): { success: boolean; remaining: number } {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs
    })
    return { success: true, remaining: limit - 1 }
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0 }
  }

  entry.count++
  return { success: true, remaining: limit - entry.count }
}

// Clean up expired entries periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    Array.from(rateLimitMap.entries()).forEach(([key, entry]) => {
      if (now > entry.resetTime) {
        rateLimitMap.delete(key)
      }
    })
  }, 60000) // Clean up every minute
}

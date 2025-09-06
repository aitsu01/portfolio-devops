type RateLimitEntry = {
  timestamp: number
  count: number
}

const requests = new Map<string, RateLimitEntry>()

export function checkRateLimit(identifier: string, limit: number, interval: number) {
  const now = Date.now()
  const entry = requests.get(identifier)

  if (!entry) {
    requests.set(identifier, { timestamp: now, count: 1 })
    return true
  }

  if (now - entry.timestamp > interval) {
    // reset finestra
    requests.set(identifier, { timestamp: now, count: 1 })
    return true
  }

  if (entry.count < limit) {
    entry.count++
    requests.set(identifier, entry)
    return true
  }

  return false
}

let registrations: any[] = []

export async function GET() {
  return Response.json({ count: registrations.length, items: registrations })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, interest, message } = body || {}
    if (!name || !email) {
      return Response.json({ error: "name and email are required" }, { status: 400 })
    }
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
    const rec = {
      id,
      name: String(name),
      email: String(email),
      interest: interest ?? "General",
      message: message ?? "",
      createdAt: new Date().toISOString(),
    }
    registrations.push(rec)
    // Simulate server-side persistence by keeping in memory and returning the id
    return Response.json({ id })
  } catch {
    return Response.json({ error: "invalid payload" }, { status: 400 })
  }
}

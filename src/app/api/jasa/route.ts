import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')

    const where: Record<string, unknown> = {}
    if (category) where.category = category

    const services = await db.service.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })

    const miceEvents = await db.mICEEvent.findMany({
      where: { isActive: true },
      orderBy: { startDate: 'asc' },
    })

    return NextResponse.json({ services, miceEvents, totalServices: services.length })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const service = await db.service.create({
      data: {
        name: body.name,
        description: body.description || '',
        category: body.category,
        kbliCode: body.kbliCode,
        price: body.price,
        duration: body.duration,
        provider: body.provider,
        isOnline: body.isOnline || false,
      }
    })
    return NextResponse.json({ service }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 })
  }
}

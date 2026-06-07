import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const projects = await db.project.findMany({
      include: { tenders: { include: { bids: true } } },
      orderBy: { createdAt: 'desc' },
    })

    const tenders = await db.tender.findMany({
      where: { status: 'open' },
      include: { project: true, bids: true },
      orderBy: { closingDate: 'asc' },
    })

    return NextResponse.json({ projects, tenders })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch construction data' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const project = await db.project.create({
      data: {
        title: body.title,
        description: body.description || '',
        category: body.category,
        kbliCode: body.kbliCode,
        location: body.location,
        budgetEstimate: body.budgetEstimate,
        startDate: body.startDate ? new Date(body.startDate) : null,
        endDate: body.endDate ? new Date(body.endDate) : null,
      }
    })
    return NextResponse.json({ project }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const plantations = await db.plantation.findMany({
      include: { harvestRecords: { orderBy: { date: 'desc' }, take: 12 } },
      where: { isActive: true },
      orderBy: { name: 'asc' },
    })

    const fisheries = await db.fishery.findMany({ where: { isActive: true } })
    const forests = await db.forestry.findMany({ where: { isActive: true } })

    return NextResponse.json({ plantations, fisheries, forests })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch agriculture data' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (body.type === 'plantation') {
      const plantation = await db.plantation.create({
        data: {
          name: body.name,
          location: body.location,
          area: body.area,
          cropType: body.cropType,
          plantingYear: body.plantingYear,
          productivity: body.productivity,
          certification: body.certification,
          mapCoords: body.mapCoords,
        }
      })
      return NextResponse.json({ plantation }, { status: 201 })
    }

    if (body.type === 'harvest') {
      const record = await db.harvestRecord.create({
        data: {
          plantationId: body.plantationId,
          date: new Date(body.date),
          quantity: body.quantity,
          quality: body.quality,
          notes: body.notes,
        }
      })
      return NextResponse.json({ record }, { status: 201 })
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create record' }, { status: 500 })
  }
}

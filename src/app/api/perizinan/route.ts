import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const permitTypes = await db.permitType.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    })

    const permitRequests = await db.permitRequest.findMany({
      include: { permitType: true, applicant: { select: { id: true, name: true, email: true } } },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ permitTypes, permitRequests })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch permit data' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const permitRequest = await db.permitRequest.create({
      data: {
        permitTypeId: body.permitTypeId,
        applicantId: body.applicantId,
        documents: body.documents ? JSON.stringify(body.documents) : null,
        notes: body.notes,
        paymentAmount: body.paymentAmount,
      }
    })
    return NextResponse.json({ permitRequest }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create permit request' }, { status: 500 })
  }
}

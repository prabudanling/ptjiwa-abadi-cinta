import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const commodities = await db.commodity.findMany({
      include: { priceHistory: { orderBy: { date: 'desc' }, take: 30 } },
      orderBy: { name: 'asc' },
    })

    const trades = await db.commodityTrade.findMany({
      include: { commodity: true },
      orderBy: { createdAt: 'desc' },
      take: 20,
    })

    const factories = await db.factory.findMany({ where: { isActive: true } })
    const warehouses = await db.warehouse.findMany()

    return NextResponse.json({ commodities, trades, factories, warehouses })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch industry data' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const trade = await db.commodityTrade.create({
      data: {
        commodityId: body.commodityId,
        type: body.type,
        quantity: body.quantity,
        price: body.price,
        totalAmount: body.quantity * body.price,
        counterparty: body.counterparty,
        deliveryDate: body.deliveryDate ? new Date(body.deliveryDate) : null,
      }
    })
    return NextResponse.json({ trade }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create trade' }, { status: 500 })
  }
}

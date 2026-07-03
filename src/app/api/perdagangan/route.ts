import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - List products with optional filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    const where: Record<string, unknown> = {}
    if (category) where.category = category
    if (search) where.name = { contains: search }

    const products = await db.product.findMany({
      where,
      include: { seller: { select: { id: true, name: true } } },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ products, total: products.length })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

// POST - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const product = await db.product.create({
      data: {
        name: body.name,
        description: body.description || '',
        category: body.category,
        kbliCode: body.kbliCode,
        price: body.price,
        unit: body.unit || 'unit',
        minOrder: body.minOrder || 1,
        stock: body.stock || 0,
        isVerified: body.isVerified || false,
        sellerId: body.sellerId,
      }
    })
    return NextResponse.json({ product }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const totalProducts = await db.product.count()
    const totalOrders = await db.order.count()
    const totalServices = await db.service.count()
    const totalProjects = await db.project.count()
    const totalCommodities = await db.commodity.count()
    const totalPlantations = await db.plantation.count()
    const totalPermitRequests = await db.permitRequest.count()
    const totalUsers = await db.user.count()

    return NextResponse.json({
      stats: {
        totalProducts,
        totalOrders,
        totalServices,
        totalProjects,
        totalCommodities,
        totalPlantations,
        totalPermitRequests,
        totalUsers,
      },
      modules: {
        perdagangan: { products: totalProducts, orders: totalOrders },
        jasa: { services: totalServices },
        konstruksi: { projects: totalProjects },
        industri: { commodities: totalCommodities },
        pertanian: { plantations: totalPlantations },
        perizinan: { permits: totalPermitRequests },
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 })
  }
}

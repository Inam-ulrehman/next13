import dbConnect from '@/lib/dbConnect'
import Sample from '@/models/Sample'

export async function GET(request) {
  const pathName = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies.getAll()
  const body = await request.json()

  await dbConnect()
  try {
    const samples = await Sample.find()
    return new Response(JSON.stringify(samples), { status: 200 })
  } catch (error) {
    return new Response('error')
  }
}

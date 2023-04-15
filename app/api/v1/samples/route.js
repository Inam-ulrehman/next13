import dbConnect from '@/lib/dbConnect'
import Sample from '@/models/Sample'

export async function GET(request) {
  await dbConnect()
  try {
    const samples = await Sample.find()
    return new Response(JSON.stringify(samples), { status: 200 })
  } catch (error) {
    return new Response('error')
  }
}

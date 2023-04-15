import dbConnect from '@/lib/dbConnect'
import Sample from '@/models/Sample'

export async function GET(request) {
  await dbConnect()
  const samples = Sample.find()

  return new Response('Data is connected')
}

import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/errors/mongoose-error-handler'
import Car from '@/models/Car'
import { headers } from 'next/headers'

export async function POST(request, res) {
  const headersList = headers()
  const _id = headersList.get('userid')
  const pathName = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies.getAll()
  const body = await request.json()
  const { make, model, type, color, year, price, image, description } = body

  await dbConnect()
  const createdBy = _id
  // return new Response(
  //   JSON.stringify({
  //     success: true,
  //     msg: 'Your request is successfully submitted.',
  //   }),
  //   { status: 200 }
  // )
  try {
    const cars = await Car.create({
      make,
      model,
      type,
      color,
      year,
      price,
      image,
      description,
      createdBy,
    })
    console.log(cars)
    return new Response(
      JSON.stringify({
        success: true,
        msg: 'Your request is successfully submitted.',
      }),
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return mongooseErrorHandler(error)
  }
}

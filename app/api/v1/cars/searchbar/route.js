import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/errors/mongoose-error-handler'
import { titleCase } from '@/lib/helper'
import Car from '@/models/Car'
import { StatusCodes } from 'http-status-codes'

export async function POST(request, res) {
  const pathName = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies.getAll()
  const body = await request.json()
  await dbConnect()
  const { search } = body
  const car = await Car.find({
    $or: [
      { make: { $regex: search, $options: 'i' } },
      { model: { $regex: search, $options: 'i' } },
      // ...
    ],
  }).limit(20)
  if (car) {
    return new Response(
      JSON.stringify({
        success: false,
        msg: `Car List.`,
        result: car,
      }),
      {
        status: StatusCodes.OK,
      }
    )
  }
}

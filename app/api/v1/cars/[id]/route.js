import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/errors/mongoose-error-handler'
import { titleCase } from '@/lib/helper'
import Car from '@/models/Car'
import { StatusCodes } from 'http-status-codes'

export async function GET(request, res) {
  const pathName = request.nextUrl.pathname.split('cars/')[1]
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies.getAll()
  await dbConnect()

  try {
    const result = await Car.findOne({ _id: pathName })
    if (!result) {
      return new Response(
        JSON.stringify(
          { success: false, msg: 'No item found' },
          { status: StatusCodes.NOT_FOUND }
        )
      )
    }
    return new Response(
      JSON.stringify(
        { success: true, msg: 'success', result },
        { status: StatusCodes.OK }
      )
    )
  } catch (error) {
    return mongooseErrorHandler(error)
  }
}

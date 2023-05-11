import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/errors/mongoose-error-handler'
import { titleCase } from '@/lib/helper'
import Car from '@/models/Car'
import { StatusCodes } from 'http-status-codes'
export async function GET(request, res) {
  await dbConnect()

  try {
    const result = await Car.find().limit(2)

    return new Response(
      JSON.stringify(
        { success: true, msg: 'list ', nbHits: result.length, result },
        { status: StatusCodes.OK }
      )
    )
  } catch (error) {
    return mongooseErrorHandler(error)
  }
}

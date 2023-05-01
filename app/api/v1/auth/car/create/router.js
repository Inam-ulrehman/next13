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
  const { email, password } = body
  const user = await Car.create({ email })

  return new Response(
    JSON.stringify({
      success: true,
      msg: `Welcome back `,
    }),
    {
      status: StatusCodes.success,
    }
  )
}

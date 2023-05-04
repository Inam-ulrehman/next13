import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/errors/mongoose-error-handler'
import { titleCase } from '@/lib/helper'
import Car from '@/models/Car'
import { StatusCodes } from 'http-status-codes'

export async function GET(request, res) {
  const searchParams = request.nextUrl.searchParams

  await dbConnect()

  // color=silver,grey&yearStart=2005&yearEnd=2016&priceLow=22000&priceHigh=68000&type=suv,sedan&make=acura,audi&sortfield=priceHigh
  const make = searchParams.get('make')?.split(',')
  const model = searchParams.get('model')?.split(',')
  const type = searchParams.get('type')?.split(',')
  const color = searchParams.get('color')?.split(',')
  const yearStart = searchParams.get('yearStart')?.split(',')
  const yearEnd = searchParams.get('yearEnd')?.split(',')
  const priceLow = searchParams.get('priceLow')?.split(',')
  const priceHigh = searchParams.get('priceHigh')?.split(',')
  const sortField = searchParams.get('sortField')?.split(',')

  let query = []
  // empty

  if (make) {
    query = [...query, { make: make }]
  }
  if (model) {
    query = [...query, { model: model }]
  }
  if (type) {
    query = [...query, { model: model }]
  }
  if (color) {
    query = [...query, { model: model }]
  }
  if (yearStart) {
  }
  if (yearEnd) {
  }
  if (priceLow) {
  }
  if (priceHigh) {
  }
  if (sortField) {
  }
  const car = await Car.find({
    $or: query,
  })
  console.log(car.length)
  return new Response(
    JSON.stringify(
      { status: false, msg: 'Search Result' },
      { status: StatusCodes.OK }
    )
  )
}

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
  const yearStart = searchParams.get('yearStart')
  const yearEnd = searchParams.get('yearEnd')
  const priceLow = searchParams.get('priceLow')
  const priceHigh = searchParams.get('priceHigh')
  const sortField = searchParams.get('sortField')

  let query = []
  let sort = {}

  // empty solution

  if (make) {
    query = [...query, { make: make }]
  }
  if (model) {
    query = [...query, { model: model }]
  }
  if (type) {
    query = [...query, { type: type }]
  }
  if (color) {
    query = [...query, { color: color }]
  }
  // add year and price in search
  let search = {
    $or: query,
  }
  if (!make && !model && !type && !color) {
    search = {}
  }
  let year = {}
  let price = {}

  if (yearStart) {
    search = { ...search, year: { ...year, $gte: yearStart } }
  }
  if (yearEnd) {
    search = { ...search, year: { ...year, $lte: yearEnd } }
  }
  if (yearStart && yearEnd) {
    search = { ...search, year: { $gte: yearStart, $lte: yearEnd } }
  }
  if (priceLow) {
    search = { ...search, price: { ...price, $gte: priceLow } }
  }
  if (priceHigh) {
    search = { ...search, price: { ...price, $lte: priceHigh } }
  }
  if (priceLow && priceHigh) {
    search = { ...search, price: { $gte: priceLow, $lte: priceHigh } }
  }

  try {
    const result = await Car.find(search).sort(sortField)
    return new Response(
      JSON.stringify(
        {
          status: false,
          msg: 'Search Result',
          nbHits: result.length,
          result,
        },
        { status: StatusCodes.OK }
      )
    )
  } catch (error) {
    mongooseErrorHandler(error)
  }
}

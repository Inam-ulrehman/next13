'use client'

import { customFetch } from '@/lib/axios/customFetch'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const List = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const sort = searchParams.get('sortfield')
  const make = searchParams.getAll('make')
  const type = searchParams.getAll('type')
  const priceLow = searchParams.get('pricelow')
  const priceHigh = searchParams.get('pricehigh')
  const yearStart = searchParams.get('yearstart')
  const yearEnd = searchParams.get('yearend')
  const color = searchParams.get('color')
  const model = searchParams.get('model')

  const fetchData = async () => {
    const search = searchParams.toString().replace(/%2C/g, ',')
    //
    try {
      const response = await customFetch(`/cars/search?${search}`)
      // console.log(response)
    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [pathname, searchParams])

  return <div>List</div>
}

export default List

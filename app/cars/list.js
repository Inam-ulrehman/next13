'use client'

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

  useEffect(() => {
    try {
    } catch (error) {}
  }, [pathname, searchParams])

  return <div>List</div>
}

export default List

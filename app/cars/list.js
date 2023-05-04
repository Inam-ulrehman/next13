'use client'

import { customFetch } from '@/lib/axios/customFetch'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const initialState = {
  list: [],
  isLoading: false,
}
const List = () => {
  const [state, setState] = useState(initialState)
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const fetchData = async () => {
    const search = searchParams.toString().replace(/%2C/g, ',')
    //
    try {
      setState({ ...state, isLoading: true })
      const response = await customFetch(`/cars/search?${search}`)
      setState({ ...state, list: response.data.result, isLoading: false })
      console.log(response)
    } catch (error) {
      setState({ ...state, isLoading: false })
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [pathname, searchParams])

  if (state.isLoading) {
    return <div>Loading</div>
  }
  if (state.list.length === 0) {
    return <div>No item found</div>
  }
  return (
    <Wrapper>
      {state.list.map((item, index) => {
        console.log(item.uploadImages[0].public_id)
        return (
          <div key={index} className='container'>
            <div className='image'>
              <CldImage
                src={item.uploadImages[0].public_id}
                alt={item.make}
                width={750}
                height={750}
              />
            </div>
            <div className='body'></div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default List

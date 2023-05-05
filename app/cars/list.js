'use client'

import { customFetch } from '@/lib/axios/customFetch'
import { formatPrice, titleCase } from '@/lib/helper'
import { Text } from '@chakra-ui/react'
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
            <div className='body'>
              <Text noOfLines={1} fontSize={'lg'} fontWeight={'medium'}>
                <span>{item.year}</span>
                <span>{titleCase(item.make)}</span>
                <span>{titleCase(item.model)}</span>
              </Text>
            </div>
            <div className='footer'>
              <Text as={'span'}>{formatPrice(`${item.price}00`)}</Text>
              <Text as={'span'}>Km, 25,000</Text>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 95vw;
  margin: 0 auto;
  gap: 0.7rem;
  .container {
  }
  .image {
    padding: 1rem;
    border: 2px solid var(--chakra-colors-gray-100);
    max-width: 45vw;
    border-radius: 10px;
  }
  .body {
    p {
      display: flex;
      gap: 0.3rem;
    }
  }
  .footer {
    display: flex;
    color: var(--chakra-colors-gray-500);
    span {
      margin-right: 1rem;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    .image {
      max-width: 35vw;
    }
  }
`
export default List

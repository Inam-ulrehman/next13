'use client'

import PaginationHook from '@/hooks/paginationHook'
import { customFetch } from '@/lib/axios/customFetch'
import { titleCase } from '@/lib/helper'
import { Skeleton, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Pagination from './pagination'
import Loading from './loading'

const initialState = {
  list: [],
  page: '',
  limit: '',
  nbHits: '',
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

      setState({
        ...state,
        list: response.data.result,
        nbHits: response.data.nbHits,
        isLoading: false,
      })
    } catch (error) {
      setState({ ...state, isLoading: false })
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [pathname, searchParams])

  // if (state.isLoading) {
  //   return <Loading />
  // }

  return (
    <Wrapper>
      <div className='main-container'>
        {state.list.map((item, index) => {
          return (
            <div key={index} className='container'>
              <div className='image'>
                <Skeleton
                  height='inherit'
                  isLoaded={!state.isLoading}
                  fadeDuration={1}
                >
                  <CldImage
                    src={item.uploadImages[0].public_id}
                    alt={item.make}
                    width={750}
                    height={750}
                  />
                </Skeleton>
              </div>
              <div className='body'>
                <Skeleton
                  height='inherit'
                  isLoaded={!state.isLoading}
                  fadeDuration={1}
                >
                  <Text noOfLines={1} fontSize={'lg'} fontWeight={'medium'}>
                    <span>{item.year}</span>
                    <span>{titleCase(item.make)}</span>
                    <span>{item.model}</span>
                  </Text>
                </Skeleton>
              </div>
              <div className='footer'>
                <Skeleton
                  height='inherit'
                  isLoaded={!state.isLoading}
                  fadeDuration={1}
                >
                  <Text as={'span'}>${item.price.toLocaleString()}</Text>
                  <Text as={'span'}>{item?.km?.toLocaleString()} km</Text>
                </Skeleton>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination nbHits={state.nbHits} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-container {
    display: grid;

    max-width: 95vw;
    margin: 0 auto;
    gap: 0.7rem;
  }
  .container {
  }
  .image {
    padding: 1rem;
    border: 2px solid var(--chakra-colors-gray-100);
    max-width: 95vw;
    margin: 0 auto;
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

  @media (min-width: 480px) {
    .main-container {
      grid-template-columns: 1fr 1fr;
    }
    .image {
      max-width: 47vw;
    }
  }
  @media (min-width: 768px) {
    .main-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .image {
      max-width: 35vw;
    }
  }
`
export default List

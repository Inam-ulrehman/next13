import React from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import styled from '@emotion/styled'
import { useRouter, useSearchParams } from 'next/navigation'
import ScrollHook from '@/hooks/scrollHook'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Pagination = ({ nbHits }) => {
  const searchParams = useSearchParams()
  const existingSearch = searchParams
    .toString()
    .split('&')
    .filter((item) => !item.startsWith('page'))
    .join('&')
    .replace(/%2C/g, ',')

  const router = useRouter()
  const limit = Number(searchParams.get('limit')) || 12
  const page = Number(searchParams.get('page')) || 1

  const totalPages = Math.ceil(nbHits / limit)
  const pagesArray = Array.from({ length: totalPages }, (v, i) => i + 1)

  // handle buttons

  const handleNext = () => {
    const nextPage = page + 1
    if (pagesArray.length <= page) {
      return
    }

    if (existingSearch) {
      return router.push(`/cars?page=${nextPage}&${existingSearch}`)
    }

    router.push(`/cars?page=${nextPage}`)
  }

  const handleIndex = (page) => {
    const currentPage = page + 1
    if (existingSearch) {
      return router.push(`/cars?page=${currentPage}&${existingSearch}`)
    }
    router.push(`/cars?page=${currentPage}`)
  }

  const handlePrev = () => {
    const prevPage = page - 1
    if (page <= 1) {
      return
    }
    if (existingSearch) {
      return router.push(`/cars?page=${prevPage}&${existingSearch}`)
    }
    router.push(`/cars?page=${prevPage}`)
  }
  if (nbHits <= 9) {
    return
  }

  return (
    <Wrapper>
      <ButtonGroup isAttached>
        <Button size={'sm'} onClick={handlePrev}>
          <GrFormPrevious size={30} />
        </Button>
        {/* Page Pagination */}
        {page > 1 && (
          <>
            <Button size={'sm'} onClick={() => handleIndex(0)} value={1}>
              First
            </Button>
          </>
        )}

        {pagesArray
          .map((item, index) => {
            return (
              <Button
                key={index}
                size={'sm'}
                className={Number(page) === index + 1 ? ` active` : ''}
                type='button'
                onClick={() => handleIndex(index)}
              >
                {item}
              </Button>
            )
          })
          .slice(page - 1, page + 4)}
        {page !== pagesArray.length && (
          <>
            <Button
              size={'sm'}
              onClick={() => handleIndex(pagesArray.length - 1)}
            >
              Last
            </Button>
          </>
        )}
        <Button size={'sm'} onClick={handleNext}>
          <GrFormNext size={30} />
        </Button>
      </ButtonGroup>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  .active {
    background-color: var(--chakra-colors-gray-300);
  }
`
export default Pagination

// ======require props======

// pages , count , limit

// =====require functions====

// handleNext() , handleIndex() , handlePrev()

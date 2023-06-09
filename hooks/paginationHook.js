import React from 'react'

import ScrollHook from './scrollHook'
import styled from '@emotion/styled'

const PaginationHook = ({ page, nbHits, limit }) => {
  const totalPages = Math.ceil(nbHits / limit)
  const pagesArray = Array.from({ length: totalPages }, (v, i) => i + 1)

  // handle buttons

  const handleNext = (e) => {
    if (pagesArray.length <= page) {
      return
    }
    dispatch(next())
    ScrollHook()
  }

  const handleIndex = (e) => {
    ScrollHook()
  }

  const handlePrev = (e) => {
    console.log('hello')
    if (page <= 1) {
      return
    }
    dispatch(prev())
    ScrollHook()
  }
  if (nbHits <= 9) {
    return
  }

  return (
    <Wrapper className='title'>
      <button className='btn prev' type='button' onClick={handlePrev}>
        Prev
      </button>
      {/* Page Pagination */}
      {page > 1 && (
        <>
          <button className='btn' onClick={handleIndex} value={1}>
            1
          </button>
        </>
      )}

      {pagesArray
        .map((item, index) => {
          return (
            <button
              key={index}
              className={
                Number(page) === index + 1
                  ? `btn btn-numbers active`
                  : 'btn btn-numbers'
              }
              type='button'
              onClick={handleIndex}
              value={item}
            >
              {item}
            </button>
          )
        })
        .slice(page - 1, page + 4)}
      {page !== pagesArray.length && (
        <>
          <button
            className='btn'
            onClick={handleIndex}
            value={pagesArray.length}
          >
            {pagesArray.length}
          </button>
        </>
      )}
      <button className='btn next' type='button' onClick={handleNext}>
        Next
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .active {
    background-color: var(--primary-8);
  }
  .prev,
  .next {
    margin: 1rem 5px;
  }
  .btn {
    border-radius: 0;
  }
  .btn-numbers {
    margin: 0 1px;
  }
`
export default PaginationHook

// ======require props======

// pages , count , limit

// =====require functions====

// handleNext() , handleIndex() , handlePrev()

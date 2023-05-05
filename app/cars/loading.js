'use client'
import { Skeleton, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const Loading = () => {
  let state = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0]
  return (
    <Wrapper>
      {state.map((item, index) => {
        return (
          <div key={'index'} className='skeleton'>
            <Skeleton height={'inherit'}></Skeleton>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  .skeleton {
    margin: 0 auto;
    width: 95vw;
    height: 270px;
  }

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;

    .skeleton {
      width: 47vw;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;

    .skeleton {
      width: 35vw;
    }
  }
`
export default Loading

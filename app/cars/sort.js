import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { TbArrowsSort } from 'react-icons/tb'

const Sort = () => {
  return (
    <Wrapper>
      <Button leftIcon={<TbArrowsSort size={22} />} variant={'outline'}>
        Sort
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .chakra-button {
    margin: 1rem;
    width: 42vw;
  }
`
export default Sort

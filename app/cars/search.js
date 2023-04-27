import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

import { GoSearch } from 'react-icons/go'

const Search = () => {
  return (
    <Wrapper>
      <InputGroup boxShadow={'lg'}>
        <InputLeftElement
          pointerEvents=''
          children={<GoSearch />}
          color='red.300'
        />
        <Input type='tel' placeholder='Search vehicles, models, or keywords' />
      </InputGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .chakra-input__group {
    max-width: 600px;
    margin: 1rem auto;
    border-radius: var(--chakra-radii-lg);
  }
  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`
export default Search

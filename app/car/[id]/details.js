import { titleCase } from '@/lib/helper'
import { Box, Button, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

import TabsHolder from './details-tab'

const Details = ({ data }) => {
  const { km, make, model, price, type, year, color } = data
  return (
    <Wrapper>
      <div className='head'>
        <div className='available'>Available</div>
        <Text
          pb={'2'}
          pt={'2'}
          display={'flex'}
          gap={2}
          fontSize={'xl'}
          fontWeight={'medium'}
        >
          <span>{year}</span>
          <span>{titleCase(make)}</span>
          <span>{titleCase(model)}</span>
        </Text>
        <Text pb={'2'} fontSize={'xl'} fontWeight={'medium'}>
          <span>$</span>
          <span>{price.toLocaleString()}</span>
        </Text>
      </div>
      <Text color={'gray.600'}>
        Delivery available to{' '}
        <Box color={'teal.500'} as='span'>
          Kitchener,Ontario
        </Box>
      </Text>
      <Button className='btn' colorScheme='red'>
        Start Purchase
      </Button>
      <div className='body'>
        <TabsHolder data={data} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  .available {
    background-color: var(--chakra-colors-teal-100);
    color: var(--chakra-colors-teal-900);
    width: fit-content;
    padding: 0.5rem;
    border-radius: 10px;
    font-weight: 500;
  }
  .btn {
    margin: 1rem 0;
    border-radius: 1.2rem;
    padding: 1.4rem;
  }
  @media (min-width: 620px) {
    width: 60vw;
  }
  @media (max-width: 920px) {
  }
  @media (min-width: 920px) {
    width: 40vw;
  }
`
export default Details

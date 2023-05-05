// 'use client'
import { Link } from '@chakra-ui/next-js'
import { Button, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import React from 'react'
const src = 'v1683313920/carsell/mutlgibtgemvnanikq4j'
const EmptyResult = () => {
  return (
    <Wrapper>
      <div className='image'>
        <CldImage src={src} width={300} height={144} alt='No search result' />
      </div>
      <Text p={'5'} size={'xlg'}>
        We didn’t find any exact matches
      </Text>
      <Button as={Link} href='/cars'>
        Clear Search
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 30vw;
  display: grid;
  place-content: center;
  text-align: center;
`
export default EmptyResult

'use client'
import { Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import React from 'react'

const DarkLogo = () => {
  return (
    <Wrapper>
      <CldImage
        src='v1682077576/carsell/glbvxetyccxfoebea7xc'
        width={500}
        height={500}
        alt='Logo'
        priority
      />
      <p>
        Car<span>Sell</span>
      </p>
    </Wrapper>
  )
}

const LightLogo = () => {
  return (
    <Wrapper>
      <CldImage
        src='v1682081929/carsell/vlqbx7qzmalsffljgemm'
        width={500}
        height={500}
        alt='Logo'
        priority
      />
      <p className='light-p'>
        Car<span>Sell</span>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -1rem 0;
  img {
    top: 0;
    width: 80px;
    height: 80px;
  }
  p {
    margin-left: 0.7rem;
    font-size: 2.4rem;
    font-weight: 500;
  }
  .light-p {
    color: var(--chakra-colors-red-400);

    border-bottom: 4px solid var(--chakra-colors-red-400);
  }
`

export { DarkLogo, LightLogo }

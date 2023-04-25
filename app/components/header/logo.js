'use client'

import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
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
        loading='eager'
        title='Logo'
      />
      <p>
        Car<span>Max</span>
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
        title='Logo'
        priority
        loading='eager'
      />
      <p className='light-p'>
        Car<span>Max</span>
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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    border-bottom: 2px solid var(--chakra-colors-red-300);
  }
  .light-p {
    color: var(--chakra-colors-gray-600);
    span {
      color: var(--chakra-colors-red-300);
    }
  }
`

export { DarkLogo, LightLogo }

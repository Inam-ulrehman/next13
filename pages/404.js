'use client'

import Link from 'next/link'

import { CldImage } from 'next-cloudinary'
import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
const src =
  'v1678718169/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_1_yxyrfp'
const Error = () => {
  return (
    <>
      <Wrapper>
        <CldImage
          src={src}
          width={400}
          height={400}
          alt='Page not found'
          priority
        />
        <a as={Link} href={'/'} className='btn '>
          Back To Home Page
        </a>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  place-items: center;

  @media (max-width: 620px) {
    img {
      width: 95vw;
      height: auto;
    }
  }
`
export default Error

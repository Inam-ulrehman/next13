'use client'

import { Button, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import SearchBox from './searchBox'
const src = 'v1678717865/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_hh0krz'
const Landing = () => {
  return (
    <Wrapper>
      <div className='title-image'>
        <div className='title'>
          <Heading
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            as='h1'
          >
            Your One-Stop Shop for Buying and Selling Cars
          </Heading>
          <Text>
            CarMax is the ultimate destination for car buyers and sellers alike.
            Whether you're looking to purchase a new car or sell your old one,
            we've got you covered.
          </Text>
        </div>
        <div className='image'>
          <CldImage
            src={src}
            width={720}
            height={720}
            alt='car Image'
            priority
          ></CldImage>
        </div>
      </div>
      <SearchBox />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .title-image {
    background-color: var(--chakra-colors-blackAlpha-200);
  }
  .title {
    p {
      padding: 1rem 0;
      font-weight: 500;
    }
  }
  .image {
  }

  /* mobile only */
  @media (max-width: 768px) {
    .title-image {
      display: grid;

      .title {
        padding: 1rem;
      }
      .image {
        width: 50%;
        margin: 0 auto;
      }
    }
  }
  /* ipad only */
  @media (min-width: 768px) {
    margin-bottom: 1rem;
    .title-image {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      .title {
        padding: 3rem;
      }
      .image {
        height: 40vh;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  /* desktop only */
  @media (min-width: 1024px) {
    min-height: calc(100vh - 58px);
    .title-image {
      align-items: center;
      height: 60vh;
      .title {
      }
      .image {
        height: 60vh;
      }
    }
  }
`

export default Landing

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
          <Heading as='h1'>Hello this is title</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            sequi corrupti, ipsum reprehenderit placeat voluptatum!
          </Text>
          <Button colorScheme='blue'>Contact us</Button>
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
  }
  .title {
    p {
      padding: 1rem 0;
      font-weight: 400;
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
    .title-image {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .title {
        padding: 3rem;
      }
      .image {
        height: 30vh;
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
      background-color: var(--chakra-colors-blackAlpha-200);
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

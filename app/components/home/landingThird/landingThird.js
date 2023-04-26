'use client'
import { bodyType } from '@/lib/data/bodyType'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { motion } from 'framer-motion'

const LandingThird = () => {
  return (
    <Wrapper>
      <Center>
        <Heading as={'h3'} padding={'2rem'} size={'lg'}>
          Browse by Body Type
        </Heading>
      </Center>
      <div className='container'>
        {bodyType.map((items, index) => {
          return (
            <motion.div
              key={index}
              className='container-holder'
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className='image'>
                <CldImage
                  src={items.src}
                  width={720}
                  height={720}
                  alt={items.name}
                />
              </div>
              <Text>{items.name}</Text>
            </motion.div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 58px);

  .container {
    .image {
    }
  }
  /* mobile only */
  @media (max-width: 768px) {
    background-color: var(--chakra-colors-gray-100);
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.7rem;
      max-width: 95vw;
      margin: 0 auto;
      .container-holder {
        padding: 1rem;
        background-color: var(--chakra-colors-whiteAlpha-900);
        border-radius: 10px;
      }
      .image {
        max-width: 22vw;
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      p {
        text-align: center;
        text-transform: capitalize;
        font-size: large;
      }
    }
  }
  /* ipad desktop only */
  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0.7rem;
      max-width: 95vw;
      margin: 0 auto;
      .container-holder {
        padding: 1rem;
      }
      .image {
        max-width: 16vw;
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      p {
        text-align: center;
        text-transform: capitalize;
        font-size: large;
        margin-top: -1rem;
        font-weight: 500;
      }
    }
  }
`
export default LandingThird

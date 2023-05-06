'use client'
import { bodyType } from '@/lib/data/bodyType'
import { Box, Center, Heading, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const LandingThird = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  return (
    <Wrapper colorMode={colorMode}>
      <Center>
        <Heading as={'h3'} padding={'2rem'} size={'lg'}>
          Browse by Body Type
        </Heading>
      </Center>
      <div className='container'>
        {bodyType.map((items, index) => {
          return (
            <motion.div
              onClick={() => router.push(`/cars?type=${items.name}`)}
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
  .container {
    .image {
    }
  }
  p {
    text-transform: capitalize;
    font-size: large;
    font-weight: 500;
  }
  /* mobile only */
  @media (max-width: 768px) {
    background-color: ${(props) =>
      props.colorMode === 'light'
        ? 'var(--chakra-colors-gray-100)'
        : '#1a202c'};
    min-height: calc(100vh - 58px);

    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.7rem;
      max-width: 95vw;
      margin: 0 auto;
      .container-holder {
        padding: 1rem;
        background-color: ${(props) =>
          props.colorMode === 'light'
            ? 'var(--chakra-colors-whiteAlpha-900)'
            : 'black'};
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
        :hover {
          color: var(--chakra-colors-red-300);
          cursor: pointer;
        }
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

        margin-top: -1rem;
      }
    }
  }
`
export default LandingThird

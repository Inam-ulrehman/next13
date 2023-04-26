'use client'
import { Button, Center, Text, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { BiCheck } from 'react-icons/bi'
const src = 'v1678717865/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_hh0krz'

const LandingTwo = () => {
  const { colorMode } = useColorMode()
  return (
    <Wrapper>
      <div className='image'>
        <CldImage src={src} width={720} height={720} alt='car Image'></CldImage>
      </div>
      <div className='cards-holder'>
        <div
          className='card-1'
          style={{
            backgroundColor: `${
              colorMode === 'dark' ? 'black' : 'var(--chakra-colors-blue-50)'
            }`,
          }}
        >
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Sell to dealership
          </Text>
          <Text>
            <BiCheck size={25} />
            Sell as early as today
          </Text>
          <Text>
            <BiCheck size={25} />
            Get multiple offers
          </Text>
          <Text>
            <BiCheck size={25} />
            Tax credit for trade-in
          </Text>
          <Text>
            <BiCheck size={25} />
            convenient drop-off
          </Text>
          <Button
            _hover={{ backgroundColor: 'blue.500', color: 'white' }}
            colorScheme='blue'
            variant={'outline'}
          >
            Get your offer now
          </Button>
        </div>
        <div
          className='card-2'
          style={{
            backgroundColor: `${
              colorMode === 'dark' ? 'black' : ' var(--chakra-colors-gray-50);'
            }`,
          }}
        >
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Sell privately
          </Text>
          <Text>
            <BiCheck size={25} />
            Free to list
          </Text>
          <Text>
            <BiCheck size={25} />
            Reach the largest audience
          </Text>
          <Text>
            <BiCheck size={25} />
            List it in minutes
          </Text>
          <Text>
            <BiCheck size={25} />
            Sell at a retail price
          </Text>

          <Button
            _hover={{ backgroundColor: 'blue.500', color: 'white' }}
            colorScheme='blue'
            variant={'outline'}
          >
            List your add
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border: 2px solid var(--chakra-colors-gray-100);
  .cards-holder {
    display: flex;
    gap: 1rem;
    margin: 1rem auto;
    padding: 1rem;
  }
  .card-1,
  .card-2 {
    padding: 2rem;
    min-width: 300px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 5px solid var(--chakra-colors-blue-500);
    p {
      padding: 0.8rem 0rem;
      display: flex;
      svg {
        /* margin-top: 1rem; */
      }
    }
    button {
      width: 100%;
    }
  }
  .card-1 {
  }
  .card-2 {
  }

  @media (max-width: 1024px) {
    .cards-holder {
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
      padding-bottom: 300px;
    }
    .image {
      position: absolute;
      width: 300px;
      height: 300px;
      margin-left: -150px;
      bottom: 0px;
      left: 50%;
    }
    .card-1,
    .card-2 {
    }
  }
  @media (min-width: 768px) {
    .card-1,
    .card-2 {
      width: 50vw;
    }
  }
  @media (min-width: 1024px) {
    min-height: calc(100vh - 58px);
    display: flex;

    border-radius: 20px;
    padding: 1rem;
    max-width: 95vw;
    margin-top: 2rem;
    margin: 0 auto;

    .image {
      height: 70vh;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .card-1,
    .card-2 {
      width: auto;
    }
  }
`
export default LandingTwo

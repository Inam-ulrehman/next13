import { Link } from '@chakra-ui/next-js'
import { Button, Center, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { FaWpforms } from 'react-icons/fa'
const ContactUs = () => {
  return (
    <Wrapper>
      <div className='header'>
        <Center>
          <Heading pb={3} fontSize={'5xl'} as={'h1'}>
            Make it yours.
          </Heading>
        </Center>
        <Center>
          <Text textAlign={'center'}>
            Complete the paperwork online and we'll deliver to you as soon as
            the next day.
          </Text>
        </Center>
        <div className='card'>
          <FaWpforms size={40} color='var(--chakra-colors-red-500)'></FaWpforms>
          <div className='text'>
            very purchase comes with a 10-Day Money-Back Guarantee and 90-Day
            Protection Plan.
          </div>
        </div>
        <Center>
          <Button colorScheme='teal' as={Link} href={'/contact'}>
            Contact Us
          </Button>
        </Center>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .header {
    padding: 2rem;
    h1 {
      padding-bottom: 1 rem;
    }
    .card {
      display: grid;
      grid-template-columns: 100px 1fr;
      align-items: center;
      border: 2px solid var(--chakra-colors-red-500);
      padding: 1rem;
      border-radius: 10px;
      margin: 1rem auto;

      max-width: 600px;
    }
  }
`

export default ContactUs

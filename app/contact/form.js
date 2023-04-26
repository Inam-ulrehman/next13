'use client'

import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
const src = 'v1678717865/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_hh0krz'
const Form = () => {
  return (
    <Wrapper>
      <div className='image-box'>
        <div className='title'>
          <Heading as={'h1'}>Submit a question</Heading>
          <Text>
            Submit a question through our contact form and we'll get back to you
            as soon as possible
          </Text>
        </div>
        <div className='image'>
          <CldImage src={src} width={720} height={720} alt='Contact us' />
        </div>
      </div>
      <form className='form'>
        <Center>
          <Text fontSize={'lg'} fontWeight={'bold'}>
            Contact Us Form
          </Text>
        </Center>

        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type='text' />
          <FormLabel>Email</FormLabel>
          <Input type='email' />
          <FormLabel>Mobile</FormLabel>
          <Input type='number' />
          <FormLabel>subject</FormLabel>
          <Input type='text' />
          <FormLabel>Message</FormLabel>

          <Textarea placeholder='Type your message here' />
        </FormControl>
        <Button mt={'1rem'} w={'100%'} colorScheme='teal' type='submit'>
          Submit
        </Button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  .image {
    width: 80vw;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .form {
  }
  /* mobile only */
  @media (max-width: 920px) {
  }
  /* desktop only */
  @media (min-width: 920px) {
    min-height: calc(100vh - 58px);

    display: grid;
    grid-template-columns: 1fr 1fr;

    .image-box {
      width: 40vw;

      margin: 0 auto;
    }
    .title {
      padding: 1rem;
    }
    .form {
    }
    .image {
      width: 30vw;

      img {
      }
    }
  }
`
export default Form

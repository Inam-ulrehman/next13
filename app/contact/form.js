'use client'
import { customFetch } from '@/lib/axios/customFetch'
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'
const src = 'v1678717865/Inamwebsolutions-nextjs/Fresh_INAMWEBSOLUTIONS_hh0krz'

const initialsState = {
  name: '',
  email: '',
  mobile: '',
  subject: '',
  message: '',
  isLoading: '',
}
const Form = () => {
  const toast = useToast()
  const [state, setState] = useState(initialsState)
  const { name, email, mobile, subject, message, isLoading } = state
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setState({ ...state, isLoading: true })
      const response = await customFetch.post('/contacts', state)
      toast({
        description: response.data.msg,
        status: 'success',
        position: 'top-right',
      })
      setState(initialsState)
    } catch (error) {
      setState({ ...state, isLoading: false })
      toast({
        description: error.response.data.msg,
        status: 'error',
        position: 'top-right',
      })
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
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
          <Input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={handleChange}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
          />
          <FormLabel>Mobile</FormLabel>
          <Input
            type='number'
            id='mobile'
            name='mobile'
            value={mobile}
            onChange={handleChange}
          />
          <FormLabel>subject</FormLabel>
          <Input
            type='text'
            id='subject'
            name='subject'
            value={subject}
            onChange={handleChange}
          />
          <FormLabel>Message</FormLabel>

          <Textarea
            placeholder='Type your message here'
            id='message'
            name='message'
            value={message}
            onChange={handleChange}
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText='Submitting'
          mt={'1rem'}
          w={'100%'}
          colorScheme='teal'
          type='submit'
        >
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

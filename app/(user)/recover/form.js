'use client'
import { customFetch } from '@/lib/axios/customFetch'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import React, { useState } from 'react'

const initialState = {
  email: '',
  isLoading: false,
}
const Form = () => {
  const toast = useToast()
  const [state, setState] = useState(initialState)
  const { email, isLoading } = state
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setState({ ...state, isLoading: true })
      const response = await customFetch.post('/user/recover', state)
      setState(initialState)
      toast({
        description: response.data.msg,
        duration: 3000,
        status: 'success',
        position: 'top-right',
        isClosable: true,
      })
    } catch (error) {
      setState({ ...state, isLoading: false })
      toast({
        description: error.response.data.msg,
        status: 'error',
        isClosable: true,
        duration: 3000,
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
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          name='email'
          type='text'
          value={email}
          onChange={handleChange}
        ></Input>
        <Button
          isLoading={isLoading}
          type='submit'
          mt='1rem'
          colorScheme='teal'
          w={'100%'}
        >
          Submit
        </Button>
        <Box
          as={'span'}
          display={'grid'}
          placeContent={'center'}
          mt={'.5rem'}
          borderBottom='2px solid var(--chakra-colors-gray-300)'
        >
          or
        </Box>
        <Button w={'100%'} mt={'1rem'} as={Link} href={'/login'}>
          Login
        </Button>
      </FormControl>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  min-height: calc(100vh - 52px);
  display: grid;
  place-content: center;

  .chakra-form-control {
    padding: 1rem;
    border: 2px solid var(--chakra-colors-gray-100);
    width: 400px;
  }
  @media (max-width: 768px) {
    .chakra-form-control {
      width: 90vw;
    }
  }
`
export default Form

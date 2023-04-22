'use client'
import { customFetch } from '@/lib/axios/customFetch'
import { Link } from '@chakra-ui/next-js'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Cookies from 'js-cookie'

import { useState } from 'react'
const initialState = {
  email: '',
  password: '',
  isLoading: false,
}

const Login = () => {
  const toast = useToast()
  const [state, setState] = useState(initialState)
  const { email, password, isLoading } = state
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setState({ ...state, isLoading: true })
      const response = await customFetch.post('/user/login', state)
      const { msg, token } = response.data
      Cookies.set('Authorization_Token', token, { expires: 7 })
      toast({
        description: msg,
        status: 'success',
        isClosable: true,
        duration: 3000,
        position: 'top-right',
      })
      setState(initialState)
      console.log(response)
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
      <FormControl isRequired borderRadius={'lg'}>
        <FormLabel>Email address</FormLabel>
        <Input
          type='email'
          value={email}
          id='email'
          name='email'
          onChange={handleChange}
        />
        <FormLabel>Password</FormLabel>

        <Input
          type={'password'}
          value={password}
          id='password'
          name='password'
          onChange={handleChange}
        />

        <Button
          type='submit'
          colorScheme='teal'
          isLoading={isLoading}
          loadingText='Submitting'
          className='submit-button'
        >
          Submit
        </Button>
        <div className='divider'>
          <span>or</span>
        </div>

        <Button w={'100%'}>
          <Link className='register' w={'100%'} href={'/register'}>
            Register
          </Link>
        </Button>
      </FormControl>
    </Wrapper>
  )
}
const Wrapper = styled.form`
  min-height: calc(100vh - 58.25px);
  display: grid;
  place-content: center;

  .chakra-form-control {
    padding: 1rem;
    border: 2px solid var(--chakra-colors-gray-100);
    width: 400px;
  }
  .submit-button {
    margin-top: 1rem;
    width: 100%;
  }
  .divider {
    width: 100%;
    margin: 0.5rem 0;
    text-align: center;
    border-bottom: 2px solid var(--chakra-colors-gray-100);
  }
  .register {
    display: grid;
    height: inherit;
    place-content: center;
  }
  @media (max-width: 768px) {
    .chakra-form-control {
      width: 90vw;
    }
  }
`
export default Login

'use client'

import { customFetch } from '@/lib/axios/customFetch'
import { Link } from '@chakra-ui/next-js'
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Cookies from 'js-cookie'
import { useState } from 'react'
const initialState = {
  name: '',
  email: '',
  password: '',
  show: false,
  isLoading: false,
}

const InputHolder = () => {
  const toast = useToast()
  const [state, setState] = useState(initialState)
  const { isLoading, email, name, password, show } = state

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setState({ ...state, isLoading: true })
      const response = await customFetch.post('/user/register', state)
      const { token } = response.data
      Cookies.set('Authorization_Token', token, { expires: 7 })
      setState(initialState)
    } catch (error) {
      const { msg } = error.response.data
      toast({
        description: msg,
        status: 'error',
        isClosable: true,
        duration: 3000,
        position: 'top-right',
      })
      setState({ ...state, isLoading: false })
    }
  }

  const handleShow = () => setState({ ...state, show: !state.show })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }
  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormControl isRequired borderRadius={'lg'}>
        <FormLabel>Name</FormLabel>
        <Input
          type='text'
          value={name}
          id='name'
          name='name'
          onChange={handleChange}
        />

        <FormLabel>Email address</FormLabel>
        <Input
          type='email'
          value={email}
          id='email'
          name='email'
          onChange={handleChange}
        />
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            value={password}
            id='password'
            name='password'
            onChange={handleChange}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='md' mr={2} onClick={handleShow}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
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
          <Link w={'100%'} href={'/login'}>
            Login
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
  @media (max-width: 768px) {
    .chakra-form-control {
      width: 90vw;
    }
  }
`
export default InputHolder

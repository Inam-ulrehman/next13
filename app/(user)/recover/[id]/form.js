'use client'

import { customFetch } from '@/lib/axios/customFetch'
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { duration } from 'moment'
import { useState } from 'react'
const initialState = {
  password: '',
  confirmPassword: '',

  isLoading: false,
}
const Form = (payload) => {
  const toast = useToast()
  const [state, setState] = useState(initialState)
  const { password, confirmPassword, isLoading } = state
  const token = payload.token

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast({
        description: 'Password is not matching',
        duration: 3000,
        isClosable: true,
        status: 'info',
        position: 'top-right',
      })
      return
    }
    if (password.length < 8 || confirmPassword.length < 8) {
      toast({
        description: 'Password must be 8 digits long.',
        duration: 3000,
        isClosable: true,
        status: 'info',
        position: 'top-right',
      })
      return
    }
    try {
      setState({ ...state, isLoading: true })
      const response = await customFetch.post(
        '/auth/user/recoverpassword',
        state,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setState(initialState)
      toast({
        description: response.data.msg,
        duration: 3000,
        position: 'top-right',
        status: 'success',
      })
    } catch (error) {
      toast({
        description: error.response.data.msg,
        duration: 3000,
        position: 'top-right',
        status: 'error',
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
      <Heading padding={'2rem 0'}>Change your Password</Heading>

      <FormControl isRequired>
        <FormLabel>New password</FormLabel>
        <Input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
        />
        <FormLabel>Confirm new password</FormLabel>
        <Input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
        <FormHelperText>Minimum 8 characters Password</FormHelperText>
        <Button
          isLoading={isLoading}
          loadingText='Changing password'
          mt={'1rem'}
          colorScheme='teal'
          width={'100%'}
          type='submit'
        >
          Submit
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
export default Form

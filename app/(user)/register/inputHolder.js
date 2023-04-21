'use client'

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useState } from 'react'
const initialState = {
  name: '',
  email: '',
  password: '',
  show: false,
  isLoading: false,
}

const InputHolder = () => {
  const [state, setState] = useState(initialState)
  const { isLoading, email, name, password, show } = state

  const handleSubmit = async (e) => {
    e.preventDefault()

    setState({ ...state, isLoading: true })
  }

  const handleShow = () => setState({ ...state, show: !state.show })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }
  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormControl borderRadius={'lg'}>
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

  @media (max-width: 768px) {
    .chakra-form-control {
      width: 90vw;
    }
  }
`
export default InputHolder

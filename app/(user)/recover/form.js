'use client'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const Form = () => {
  return (
    <Wrapper>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type='text'></Input>
        <Button mt='1rem' colorScheme='teal' w={'100%'}>
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

'use client'

import { useToast } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Landing = () => {
  const toast = useToast()
  const handleClick = () => {
    toast({
      position: 'top-right',
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }
  return (
    <Wrapper>
      <button type='button' onClick={handleClick}>
        Click me
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: pink;
`

export default Landing

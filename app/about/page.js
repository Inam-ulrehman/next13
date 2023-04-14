'use client'
import { BiArrowFromBottom } from 'react-icons/bi'
import {
  Button,
  ButtonGroup,
  Center,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Wrapper>
      <Center>
        <Heading as={'h1'}>Hello world</Heading>
      </Center>
      <ButtonGroup isAttached variant='outline'>
        <Button colorScheme='green'>Click me</Button>
        <IconButton
          icon={<BiArrowFromBottom size={30} color='green' />}
        ></IconButton>
      </ButtonGroup>
      <a href=''>HOW ARE YOU</a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        praesentium.
      </p>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default About

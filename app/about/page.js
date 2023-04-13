'use client'
import { BiArrowFromBottom } from 'react-icons/bi'
import {
  Button,
  ButtonGroup,
  Center,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import React from 'react'

const About = () => {
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
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default About

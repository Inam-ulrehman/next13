import React from 'react'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Divider,
  HStack,
  List,
  ListItem,
  useColorMode,
} from '@chakra-ui/react'
import { VscColorMode } from 'react-icons/vsc'
import styled from '@emotion/styled'
import { DarkLogo, LightLogo } from './logo'

const DesktopNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Wrapper
      style={{
        backgroundColor: `${colorMode === 'light' ? 'white' : 'black'}`,
      }}
    >
      {colorMode === 'light' ? <LightLogo /> : <DarkLogo />}

      <List display={'flex'} alignItems={'center'} gap={5}>
        <ListItem>
          <Link href={'/'}>Home</Link>
        </ListItem>
        <ListItem>
          <Link href={'/about'}>About</Link>
        </ListItem>
        <ListItem>
          <Link href={'/samples'}>Samples</Link>
        </ListItem>
      </List>
      <HStack>
        <Button onClick={toggleColorMode} leftIcon={<VscColorMode />}>
          {colorMode === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
        <Box>
          <Link mr={2} href={'login'}>
            <Button>Login</Button>
          </Link>
          <Link href={'/register'}>
            <Button>Register</Button>
          </Link>
        </Box>
      </HStack>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--chakra-colors-gray-200);
  /* background-color: var(--chakra-colors-white); */
  @media (max-width: 768px) {
    display: none;
  }
`

export default DesktopNavbar

import React from 'react'
import { Link } from '@chakra-ui/next-js'
import { Box, Button, LinkBox, List, ListItem } from '@chakra-ui/react'
import styled from '@emotion/styled'
import DesktopLogo from './desktopLogo'
import { Row } from '@nextui-org/react'
const DesktopNavbar = () => {
  return (
    <Wrapper>
      <DesktopLogo />
      <List display={'flex'} gap={5}>
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
      <Box>
        <Link mr={2} href={'login'}>
          <Button>Login</Button>
        </Link>
        <Link href={'/register'}>
          <Button>Register</Button>
        </Link>
      </Box>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--chakra-colors-white);
  @media (max-width: 768px) {
    display: none;
  }
`

export default DesktopNavbar

import React from 'react'
import { Link } from '@chakra-ui/next-js'
import { List, ListItem } from '@chakra-ui/react'
import styled from '@emotion/styled'
const DesktopNavbar = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`

export default DesktopNavbar

'use client'
// import { Link } from '@chakra-ui/next-js'
import { List, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
// const { colorMode, toggleColorMode } = useColorMode()
{
  /* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */
}
const Header = () => {
  return (
    <header>
      <nav>
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
      </nav>
    </header>
  )
}

export default Header

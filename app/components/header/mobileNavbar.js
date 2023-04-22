import React from 'react'
import { Link } from '@chakra-ui/next-js'
import { MdMenuOpen } from 'react-icons/md'
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import styled from '@emotion/styled'
import { LightLogo } from './logo'
import IsMember from './isMember'
import ToggleTheme from './toggleTheme'
const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Wrapper>
      <div className='test'></div>
      <Box
        as='div'
        className='menu'
        display={'flex'}
        justifyContent={'space-between'}
      >
        <div className='logo'>
          <LightLogo />
        </div>
        <IconButton
          leftIcon={<MdMenuOpen size={55} />}
          mt={2}
          ref={btnRef}
          onClick={onOpen}
        ></IconButton>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton size={'lg'} />
            <DrawerHeader>Best Car Seller</DrawerHeader>
            <DrawerBody>
              <List display={'grid'} gap={5}>
                <ListItem>
                  <Link onClick={onClose} href={'/'}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link onClick={onClose} href={'/about'}>
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link onClick={onClose} href={'/samples'}>
                    Samples
                  </Link>
                </ListItem>
              </List>
            </DrawerBody>
            <DrawerFooter
              onClick={onClose}
              display={'grid'}
              placeContent={'center'}
            >
              <IsMember />
            </DrawerFooter>
            <ToggleTheme />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .logo {
    padding: 5px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export default MobileNavbar

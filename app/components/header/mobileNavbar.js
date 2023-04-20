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

import MobileLogo from './mobileLogo'
import styled from '@emotion/styled'
const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Wrapper>
      <Box as='div' display={'flex'} justifyContent={'space-between'}>
        <MobileLogo />
        <IconButton
          leftIcon={<MdMenuOpen size={35} />}
          ref={btnRef}
          onClick={onOpen}
          className='menu-button'
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
            <DrawerHeader>Nav bar header</DrawerHeader>
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
            <DrawerFooter>
              <Button onClick={onClose}>Close</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  /* position: relative;
  .menu-button {
    position: fixed;
    top: 0;
    right: 0;
  } */
  @media (min-width: 768px) {
    display: none;
  }
`

export default MobileNavbar

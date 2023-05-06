import React from 'react'
import { Link } from '@chakra-ui/next-js'
import { MdMenuOpen } from 'react-icons/md'
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  useColorMode,
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
import { DarkLogo, LightLogo } from './logo'
import IsMember from './isMember'
import ToggleTheme from './toggleTheme'
import MobileProfile from './mobileProfile'
const MobileNavbar = () => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Wrapper>
      <Box
        as='div'
        className='menu'
        display={'flex'}
        justifyContent={'space-between'}
        bgColor={colorMode === 'light' ? 'white' : 'black'}
      >
        <div className='logo'>
          {colorMode === 'light' ? <LightLogo /> : <DarkLogo />}
        </div>
        <IconButton
          bgColor={'transparent'}
          leftIcon={<MdMenuOpen size={45} />}
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
                  <Link onClick={onClose} href={'/cars'}>
                    Shop Cars
                  </Link>
                </ListItem>

                <ListItem>
                  <Link onClick={onClose} href={'/contact'}>
                    Contact Us
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
              <MobileProfile />
            </DrawerFooter>
            <ToggleTheme />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  border-bottom: 2px solid var(--chakra-colors-gray-300);

  .logo {
    padding: 5px;
    align-items: baseline !important;
    margin-top: 10px;
    img {
      width: 50px;
      height: 50px;
      margin-top: 5px;
    }
    p {
      border-bottom: 0px;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export default MobileNavbar

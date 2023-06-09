'use client'

import React from 'react'
import DesktopNavbar from './desktopNavbar'
import MobileNavbar from './mobileNavbar'
import styled from '@emotion/styled'
// const { colorMode, toggleColorMode } = useColorMode()
{
  /* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */
}
const Header = () => {
  return (
    <Wrapper>
      <DesktopNavbar />
      <MobileNavbar />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
`
export default Header

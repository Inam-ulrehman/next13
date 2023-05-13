'use client'

import Address from './address'

import SocialMedia from './socialMedia'

import styled from '@emotion/styled'
import CopyRight from './copyRight'
import NavbarLinks from './navbarLinks'
import { DarkLogo, LightLogo } from '../header/logo'
import { Divider, useColorMode } from '@chakra-ui/react'

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <Wrapper>
      <Divider />
      <div className='logo'>
        {colorMode === 'light' ? <LightLogo /> : <DarkLogo />}
      </div>
      <div className='footer-body'>
        <NavbarLinks />
        <SocialMedia />
        <Address />
      </div>
      <CopyRight />
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  min-height: calc(100vh - 58px);
  display: grid;
  align-content: space-between;
  .logo {
    display: grid;
    justify-content: center;
  }
  background-color: var(--primary-7);
  @media (min-width: 768px) {
    .footer-body {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      max-width: var(--max-width);
      margin: 0 auto;
    }
  }
`
export default Footer

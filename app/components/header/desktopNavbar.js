import { HStack, List, ListItem, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { DarkLogo, LightLogo } from './logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import IsMember from './isMember'
import ToggleTheme from './toggleTheme'

const DesktopNavbar = () => {
  const path = usePathname()

  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Wrapper
      style={{
        backgroundColor: `${colorMode === 'light' ? 'white' : 'black'}`,
      }}
    >
      {colorMode === 'light' ? <LightLogo /> : <DarkLogo />}

      <List className='links' display={'flex'} alignItems={'center'} gap={3}>
        <ListItem>
          <Link className={path === '/' ? 'active' : ''} href={'/'}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link className={path === '/about' ? 'active' : ''} href={'/about'}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className={path === '/samples' ? 'active' : ''}
            href={'/samples'}
          >
            Samples
          </Link>
        </ListItem>
      </List>
      <HStack>
        <ToggleTheme />
        <IsMember />
      </HStack>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem;

  border-bottom: 1px solid var(--chakra-colors-gray-200);
  .links {
    li {
      height: 100%;
      display: flex;
    }
    a {
      margin-top: 0.3rem;
      padding: 0 1rem;
      display: grid;
      place-content: center;

      height: 100%;

      :hover {
        border-top: 2px solid transparent;
        border-bottom: 2px solid var(--chakra-colors-red-300);
      }
    }
  }
  .active {
    border-top: 2px solid transparent;
    border-bottom: 2px solid var(--chakra-colors-red-300);
  }

  @media (max-width: 760px) {
    display: none;
  }
`

export default DesktopNavbar

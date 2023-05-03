'use client'

import { Link } from '@chakra-ui/next-js'
import { Button, List, ListItem, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AiOutlineCar } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdSpaceDashboard } from 'react-icons/md'

const DashboardNav = () => {
  const { colorMode } = useColorMode()
  return (
    <Wrapper
      style={{
        backgroundColor:
          colorMode === 'light' ? 'var(--chakra-colors-gray-100)' : '',
      }}
    >
      <List className='list'>
        <ListItem>
          <Button
            leftIcon={<MdSpaceDashboard />}
            as={Link}
            href='/dashboard/admin'
          >
            Dashboard
          </Button>
        </ListItem>
        <ListItem>
          <Button
            leftIcon={<AiOutlineCar />}
            as={Link}
            href='/dashboard/admin/cars'
          >
            Cars
          </Button>
        </ListItem>
        <ListItem>
          <Button
            leftIcon={<AiOutlineCar />}
            as={Link}
            href='/dashboard/admin/cars/upload'
          >
            Upload Car
          </Button>
        </ListItem>

        <ListItem>
          <Button
            leftIcon={<CgProfile />}
            as={Link}
            href='/dashboard/admin/profile'
          >
            Profile
          </Button>
        </ListItem>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  /* mobile ipad */
  @media (max-width: 920px) {
    .list {
      display: flex;
      flex-wrap: wrap;
      a {
        padding: 1rem;
      }
    }
  }
  /* desktop */
  @media (min-width: 920px) {
    min-height: 100vh;
    width: 200px;
    .list {
      position: sticky;
      top: 13%;
      left: 0;
    }
    border-right: 2px solid var(--chakra-colors-gray-100);
  }
`
export default DashboardNav

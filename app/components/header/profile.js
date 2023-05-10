import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutCircleRLine, RiProfileLine } from 'react-icons/ri'
import { MdSpaceDashboard } from 'react-icons/md'
import { useRouter } from 'next/navigation'
const initialState = {
  show: false,
}
const Profile = () => {
  const router = useRouter()
  const [state, setState] = useState(initialState)
  const token = Cookies.get('Authorization_Token')

  const handleLogOut = () => {
    Cookies.remove('Authorization_Token')
    router.refresh()
  }

  useEffect(() => {
    if (!token || token === 'undefined') {
      return setState({ ...state, show: false })
    }
    setState({ ...state, show: true })
    // eslint-disable-next-line no-use-before-define
  }, [token])
  return (
    <Wrapper>
      {state.show && (
        <Menu>
          <MenuButton as={Button} leftIcon={<CgProfile />}>
            Profile
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem
                onClick={() => router.push('/dashboard')}
                icon={<MdSpaceDashboard size={20} />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                onClick={() => router.push('/dashboard')}
                icon={<RiProfileLine size={20} />}
              >
                Change Profile
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem
                onClick={handleLogOut}
                icon={<RiLogoutCircleRLine size={20} />}
              >
                Logout
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Profile

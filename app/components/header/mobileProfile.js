import {
  Button,
  ButtonGroup,
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
import { Link } from '@chakra-ui/next-js'

const initialState = {
  show: false,
}
const MobileProfile = () => {
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
  }, [token])
  return (
    <Wrapper>
      {state.show && (
        <ButtonGroup>
          <Button as={Link} href={'/dashboard/user'}>
            Dashboard
          </Button>
          <Button onClick={handleLogOut}>Logout</Button>
        </ButtonGroup>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default MobileProfile

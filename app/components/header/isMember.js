import { Link } from '@chakra-ui/next-js'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const initialState = {
  show: false,
}
const IsMember = () => {
  const [state, setState] = useState(initialState)
  const token = Cookies.get('Authorization_Token')

  useEffect(() => {
    if (!token || token === 'undefined') {
      return setState({ ...state, show: true })
    }
    setState({ ...state, show: false })
  }, [state, token])
  return (
    <Wrapper>
      <Box>
        {state.show && (
          <ButtonGroup isAttached>
            <Button
              as={Link}
              href={'/login'}
              borderRight='2px solid var(--chakra-colors-gray-300)'
            >
              Login
            </Button>

            <Button as={Link} href={'/register'}>
              Register
            </Button>
          </ButtonGroup>
        )}
      </Box>
    </Wrapper>
  )
}
const Wrapper = styled.div``

export default IsMember

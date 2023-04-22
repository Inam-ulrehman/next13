import { Link } from '@chakra-ui/next-js'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const IsMember = () => {
  return (
    <div>
      <Box>
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
      </Box>
    </div>
  )
}

export default IsMember

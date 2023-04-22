import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { VscColorMode } from 'react-icons/vsc'

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode} leftIcon={<VscColorMode />}>
      {colorMode === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  )
}

export default ToggleTheme

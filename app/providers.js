'use client'

import { CacheProvider } from '@chakra-ui/next-js'

import { ChakraProvider } from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import { theme } from './styles/theme'

const { ToastContainer } = createStandaloneToast()

export function Providers({ children }) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          {children}
          <ToastContainer />
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}

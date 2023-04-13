// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'

const { ToastContainer } = createStandaloneToast()
const theme = extendTheme({
  colors: {
    primary: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
})

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
        <ToastContainer />
      </ChakraProvider>
    </CacheProvider>
  )
}

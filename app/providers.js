'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import { theme } from './styles/theme'
import { Provider } from 'react-redux'
import store from '@/store'

const { ToastContainer } = createStandaloneToast()

export function Providers({ children }) {
  return (
    <>
      <CacheProvider>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            {children}
            <ToastContainer />
          </ChakraProvider>
        </Provider>
      </CacheProvider>
    </>
  )
}

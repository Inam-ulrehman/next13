import { extendTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
export const theme = extendTheme({
  config,
  colors: {
    primary: {
      50: '#f7fafc',
      900: '#171923',
    },
    secondary: {
      50: '#f7fafc',
      900: '#171923',
    },
  },

  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: 'gray.400',
        // color: 'white',
        // fontFamily: 'Avenir Next,Arial,Roboto,Noto,sans-serif',
      },
      // styles for the `a`
      // a: {
      //   color: 'teal.500',
      //   _hover: {
      //     textDecoration: 'underline',
      //   },
      // },
    },
  },
})

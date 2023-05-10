import { Link } from '@chakra-ui/next-js'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { BiAbacus } from 'react-icons/bi'
import Make from './filterMake'
import BodyType from './filterBodyType'
import Price from './filterPrice'
import Year from './filterYear'
import Colors from './filterColors'

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <Wrapper>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<BiAbacus size={22} />}
        variant={'outline'}
      >
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        size={'full'}
        isFullHeight={true}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Find your ride</DrawerHeader>
            {/* filter options below */}
            <DrawerBody mt={8}>
              <Make />
              <BodyType />
              <Price />
              <Year />
              <Colors />
            </DrawerBody>
            <DrawerFooter display={'flex'} justifyContent={'space-around'}>
              <Link color={'teal.500'} href={'/cars'} fontWeight={'bold'}>
                Clear all Filters
              </Link>
              <Button onClick={onClose} colorScheme='teal' size={'lg'}>
                Show results
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .chakra-button {
    margin: 1rem;
    width: 42vw;

    z-index: -1;
  }
`
export default Filter

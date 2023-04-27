import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { BiAbacus } from 'react-icons/bi'

const sortData = [
  { name: 'Feature', path: '&sortField=feature' },
  { name: 'Newest', path: '&sortField=newest' },
  { name: 'Least Expensive', path: '&sortField=price&sortDirection=low' },
  { name: 'Most Expensive', path: '&sortField=price&sortDirection=high' },
  { name: 'Highest Mileage', path: '&sortField=mileage&sortDirection=high' },
  { name: 'Lowest Mileage', path: '&sortField=mileage&sortDirection=low' },
  { name: '', path: '' },
]
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
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>Sort</DrawerHeader>
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
  }
`
export default Filter

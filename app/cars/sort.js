import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { TbArrowsSort } from 'react-icons/tb'
const sortData = [
  { name: 'Feature', path: '&sortField=feature' },
  { name: 'Newest', path: '&sortField=newest' },
  { name: 'Least Expensive', path: '&sortField=price&sortDirection=low' },
  { name: 'Most Expensive', path: '&sortField=price&sortDirection=high' },
  { name: 'Highest Mileage', path: '&sortField=mileage&sortDirection=high' },
  { name: 'Lowest Mileage', path: '&sortField=mileage&sortDirection=low' },
]
const Sort = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <Wrapper>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<TbArrowsSort size={22} />}
        variant={'outline'}
      >
        Sort
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
            <Divider size={'md'} />
            <DrawerBody display={'grid'}>
              {sortData.map((item, index) => {
                return (
                  <Button
                    key={index}
                    variant={'ghost'}
                    width='100%'
                    justifyContent='flex-start'
                    onClick={onClose}
                  >
                    {item.name}
                  </Button>
                )
              })}
            </DrawerBody>
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
export default Sort

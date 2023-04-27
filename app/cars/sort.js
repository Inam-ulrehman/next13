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
import { sortData } from './data'

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
    width: 40vw;
  }
`
export default Sort

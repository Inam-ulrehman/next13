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
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { filterParams } from './lib'

const Sort = () => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const handleSort = (item) => {
    onClose()
    const sortField = searchParams.get('sortField')
    if (sortField) {
      const newSearchParams = filterParams(searchParams, 'sortField')
      router.replace(`${pathName}?${item.path}${newSearchParams}`)
      return
    }
    router.replace(`${pathName}?${item.path}`)
  }
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
                    onClick={() => handleSort(item)}
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

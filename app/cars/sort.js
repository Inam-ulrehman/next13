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
import { filterSort } from './lib'

const Sort = () => {
  const searchParams = useSearchParams()
  const sortField = searchParams.get('sortfield')
  const pathName = usePathname()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const handleSort = (item) => {
    onClose()
    if (sortField) {
      const newSearchParams = filterSort(searchParams, 'sortfield')
      router.replace(`${pathName}?sortfield=${item.path}${newSearchParams}`)
      return
    }
    const existingSearchParams = searchParams.toString().replace(/%2C/g, ',')

    if (existingSearchParams) {
      return router.replace(
        `${pathName}?sortfield=${item.path}&${existingSearchParams}`
      )
    }
    router.replace(`${pathName}?sortfield=${item.path}`)
  }
  return (
    <Wrapper>
      <button className='btn' ref={btnRef} onClick={onOpen}>
        <TbArrowsSort size={22} />
        Sort
      </button>

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
                    color={sortField === item.path ? 'red.300' : ''}
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
  .btn {
    display: flex;
    align-items: center;
    margin: 1rem;
    justify-content: center;
    border: 1.5px solid var(--chakra-colors-gray-100);
    width: 40vw;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    :hover {
      background-color: var(--chakra-colors-gray-200);
    }
    transition: 0.3s ease-in-out;
  }
  .active {
    color: var(--chakra-colors-red-300);
  }
`
export default Sort

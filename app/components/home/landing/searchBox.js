import {
  Button,
  ButtonGroup,
  Heading,
  Select,
  background,
  useColorMode,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdElectricBolt } from 'react-icons/md'

const SearchBox = () => {
  const { colorMode } = useColorMode()

  return (
    <Wrapper>
      <Heading size={'md'} color={'whiteAlpha.900'}>
        Search 276,389 Cars, Trucks & SUVs
      </Heading>
      <div className='search'>
        <Select
          bg={colorMode === 'light' ? 'whiteAlpha.900' : ''}
          placeholder='Select option'
        >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Select
          bg={colorMode === 'light' ? 'whiteAlpha.900' : ''}
          placeholder='Select option'
        >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Select
          bg={colorMode === 'light' ? 'whiteAlpha.900' : ''}
          placeholder='Select option'
        >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <div className='button-cars'>
          <Button colorScheme='blue' pl={'8'} pr={'8'}>
            Show me cars
          </Button>
        </div>
      </div>
      {/* box divider */}
      <div className='search-buttons'>
        <div className='popular'>
          <Heading size='sm' color={'whiteAlpha.900'}>
            Most Popular Cars in Canada:
          </Heading>
          <div className='buttons-list'>
            <Button size={'xs'} leftIcon={<BsSearch />}>
              Honda Civic
            </Button>
            <Button size={'xs'} leftIcon={<BsSearch />}>
              Ford Mustang
            </Button>
            <Button size={'xs'} leftIcon={<BsSearch />}>
              Ford F-150
            </Button>
            <Button size={'xs'} leftIcon={<BsSearch />}>
              Honda C-RV
            </Button>
            <Button size={'xs'} leftIcon={<BsSearch />}>
              Toyota Rav4
            </Button>
          </div>
        </div>
        <div className='offer-button'>
          <Heading color={'whiteAlpha.900'} size={'sm'}>
            Sell your car?
          </Heading>
          <Button leftIcon={<MdElectricBolt />} size={'sm'}>
            Get your offer now
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--chakra-colors-blackAlpha-800);
  padding: 1.5rem;
  .search {
    padding-top: 1rem;
  }
  .search-buttons {
    padding-top: 1rem;
    display: grid;
  }
  .buttons-list {
    margin-top: 1rem;
  }
  .buttons-list {
    display: flex;
    flex-wrap: wrap;
    button {
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  .offer-button {
    button {
      margin-top: 1rem;
    }
  }

  /* mobile ipad only */
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    .search {
      display: grid;
      gap: 1rem;
    }
  }
  @media (min-width: 768px) {
    .search {
      display: flex;
      gap: 1rem;
    }
  }

  /* desktop only */
  @media (min-width: 1024px) {
    min-height: calc(100vh - 58px - 60vh + 4rem);
    max-width: 85vw;
    margin: 0 auto;
    margin-top: -4rem;
    border-radius: 10px;

    .chakra-menu {
      margin-right: 5px;
    }
    .button-cars {
      margin-left: 3rem;
    }
    .search-buttons {
      display: flex;
      justify-content: space-between;
    }
    .buttons-list {
      button {
        color: var(--chakra-colors-blue-500);
        :hover {
          color: white;
          background-color: var(--chakra-colors-blue-500);
        }
      }
    }
    .offer-button {
      border-left: 2px solid var(--chakra-colors-whiteAlpha-900);
      padding-left: 1rem;
      button {
        color: var(--chakra-colors-blue-500);
        :hover {
          color: white;
          background-color: var(--chakra-colors-blue-500);
        }
      }
    }
  }
`
export default SearchBox

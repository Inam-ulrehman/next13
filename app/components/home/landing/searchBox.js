import { colors } from '@/app/cars/data'
import { makes } from '@/lib/data/carMakes'
import { titleCase } from '@/lib/helper'
import { Button, Heading, Select, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdElectricBolt } from 'react-icons/md'
const initialState = {
  make: '',
  models: [],
  model: '',
  colors: colors,
  color: '',
  search: [],
}
const SearchBox = () => {
  const [state, setState] = useState(initialState)
  const router = useRouter()
  const { colorMode } = useColorMode()

  const handleMake = (e) => {
    const make = e.target.value
    if (!make) {
      return setState({ ...state, make: '', model: '', color: '' })
    }
    const filter = makes.find((item) => item.company === make)
    const models = filter.models
    setState({ ...state, make, models })
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value.toLowerCase()
    setState({ ...state, [name]: value })
  }

  const handleShowCars = () => {
    const { make, model, color } = state
    let search = ''
    if (make) {
      search += `&make=${make}`
    }
    if (model) {
      search += `&model=${model}`
    }
    if (color) {
      search += `&color=${color}`
    }

    if (!search) {
      return router.push(`/cars`)
    }
    router.push(`/cars?${search}`)
  }
  return (
    <Wrapper>
      <Heading size={'md'} color={'whiteAlpha.900'}>
        Search 276,389 Cars, Trucks & SUVs
      </Heading>
      <div className='search'>
        <Select
          onChange={handleMake}
          id='make'
          name='make'
          bg={colorMode === 'light' ? 'whiteAlpha.900' : ''}
          placeholder='Select car'
        >
          {makes.map((item, index) => {
            return (
              <option key={index} value={item.company}>
                {titleCase(item.company)}
              </option>
            )
          })}
        </Select>
        <Select
          onChange={handleChange}
          id='model'
          name='model'
          bg={colorMode === 'light' ? 'whiteAlpha.900' : ''}
          placeholder='Select model'
          isDisabled={state.make.length === 0}
        >
          {state.models?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {titleCase(item)}
              </option>
            )
          })}
        </Select>
        <Select
          onChange={handleChange}
          id='color'
          name='color'
          bg={colorMode === 'light' ? 'whiteAlpha.900' : ''}
          placeholder='Select color optional'
          isDisabled={state.make.length === 0}
        >
          {state.colors.map((item, index) => {
            return (
              <option key={index} value={item.color}>
                {item.color}
              </option>
            )
          })}
        </Select>
        <div className='button-cars'>
          <Button onClick={handleShowCars} colorScheme='blue' pl={'8'} pr={'8'}>
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

import { customFetch } from '@/lib/axios/customFetch'
import { titleCase } from '@/lib/helper'
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

import { GoSearch } from 'react-icons/go'

const initialState = {
  search: '',
  list: [],
  isLoading: false,
}

const Search = () => {
  const [state, setState] = useState(initialState)
  const [searchResult, setSearchResult] = useState([])
  const { search, list } = state

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
    if (!e.target.value) {
      setSearchResult([])
    }
  }
  const fetchData = async () => {
    try {
      const response = await customFetch.post('cars/searchbar', state)
      // console.log(response.data.result)
      setSearchResult(response.data.result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (!search) {
      return
    }
    fetchData()
  }, [search])
  return (
    <Wrapper>
      <InputGroup boxShadow={'lg'}>
        <InputLeftElement pointerEvents='' color='red.300'>
          <GoSearch />
        </InputLeftElement>
        <Input
          value={search}
          name='search'
          id='search'
          onChange={handleChange}
          type='text'
          placeholder='Search vehicles, models, or keywords'
        />
        {search && searchResult.length > 0 && (
          <div className='container'>
            <ul className='list'>
              {searchResult.map((item, index) => {
                return (
                  <li key={index}>
                    {titleCase(item.model)} {titleCase(item.make)}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </InputGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 2;
  .chakra-input__group {
    max-width: 600px;
    margin: 1rem auto;
    border-radius: var(--chakra-radii-lg);
    position: relative;
  }
  .container {
    position: absolute;
    top: 95%;
    border: 2px solid var(--chakra-colors-gray-100);
    width: inherit;
  }
  .list {
    background-color: white;
    list-style: none;
    height: 200px;
    overflow-y: scroll;
    li {
      padding-left: 2.5rem;
      :hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`
export default Search

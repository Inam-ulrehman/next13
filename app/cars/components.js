'use client'
import Search from './search'
import Filter from './filter'
import Sort from './sort'
import styled from 'styled-components'
const Components = () => {
  return (
    <Wrapper>
      <Search />
      <div className='filter-sort'>
        <Filter />
        <Sort />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .filter-sort {
    display: flex;
  }
`

export default Components

'use client'
import Search from './search'
import Filter from './filter'
import Sort from './sort'
import styled from '@emotion/styled'
import List from './list'

const Components = () => {
  return (
    <Wrapper>
      <Search />
      <div className='filter-sort'>
        <Filter />
        <Sort />
      </div>
      <List />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .filter-sort {
    display: flex;
    justify-content: center;
  }
`

export default Components

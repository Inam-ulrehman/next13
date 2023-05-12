'use client'
import Images from './images'
import Details from './details'
import styled from '@emotion/styled'

const Components = ({ result }) => {
  const data = JSON.parse(result)
  return (
    <Wrapper>
      <Images data={data}></Images>
      <Details data={data}></Details>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  max-width: 90vw;
  margin: 0 auto;
  padding-top: 1rem;

  @media (max-width: 920px) {
    gap: 1rem;
  }
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default Components

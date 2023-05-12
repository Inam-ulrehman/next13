'use client'
import Images from './images'
import Details from './details'
import styled from '@emotion/styled'
import ContactUs from './contactUs'

const Components = ({ result }) => {
  const data = JSON.parse(result)
  return (
    <Wrapper>
      <div className='main-container'>
        <Images data={data}></Images>
        <Details data={data}></Details>
      </div>
      <hr />
      <ContactUs />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-container {
    display: grid;
    max-width: 90vw;
    margin: 0 auto;
    padding-top: 1rem;
  }

  @media (max-width: 920px) {
    .main-container {
      gap: 1rem;
    }
  }
  @media (min-width: 920px) {
    .main-container {
      grid-template-columns: 1fr 1fr;
    }
  }
`
export default Components

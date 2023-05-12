// 'use client'
import Images from './images'
import Details from './details'
// import styled from '@emotion/styled'

const Components = ({ result }) => {
  return (
    <div>
      <Images result={result}></Images>
      <Details result={result}></Details>
    </div>
  )
}

// const Wrapper = styled.div`
//   @media (min-width: 920px) {
//     background-color: pink;
//   }
// `
export default Components

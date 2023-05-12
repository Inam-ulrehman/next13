import styled from '@emotion/styled'
import React from 'react'

const Specs = ({ data }) => {
  const specs = [
    { name: 'VIN', value: '2T3BFREVOJW785274' },
    { name: 'Exterior', value: 'Grey' },
    { name: 'Interior', value: 'Black' },
    { name: 'Fuel Type', value: 'Gasoline' },
    { name: 'Cargo Capacity', value: '1090 L' },
  ]
  return (
    <Wrapper>
      {specs.map((item, index) => {
        return (
          <div className='container' key={index}>
            <span>{item.name}</span>
            <span className='value'>{item.value}</span>
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .container {
    padding: 0.5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export default Specs

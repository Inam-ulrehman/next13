import styled from '@emotion/styled'
import React from 'react'

const Feature = ({ data }) => {
  const features = [
    'Bluetooth',
    'Backup Camera',
    'Dynamic Radar Cruise Control',
    '6.1” Touch Panel Display Audio',
    'Keyless Entry',
    'Power Windows w/Driver Side Auto Down',
    'Heated Front Bucket Seats',
    'Air Conditioning',
  ]
  return (
    <Wrapper>
      {features.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  p {
    padding: 0.5rem 0;
  }
`
export default Feature

import { getStateValues } from '@/features/cars/carsSlice'
import { FormLabel, Input } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Year = () => {
  const { year } = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    dispatch(getStateValues({ name, value }))
  }
  return (
    <Wrapper>
      <FormLabel>Pick a Date</FormLabel>
      <Input
        onChange={handleChange}
        type='month'
        id='year'
        name='year'
        value={year}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  input {
    max-width: 230px;
  }
`
export default Year

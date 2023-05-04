import { getStateValues } from '@/features/cars/carsSlice'
import {
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Description = () => {
  const { description } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <Wrapper>
      <FormLabel>Description</FormLabel>

      <Textarea
        name='description'
        id='description'
        onChange={handleChange}
        placeholder='Enter Description'
        value={description}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Description

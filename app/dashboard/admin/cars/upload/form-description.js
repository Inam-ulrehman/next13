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
import { useDispatch } from 'react-redux'

const Description = () => {
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
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Description

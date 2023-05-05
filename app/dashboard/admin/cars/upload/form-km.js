import { getStateValues } from '@/features/cars/carsSlice'
import { AiOutlineCar } from 'react-icons/ai'
import {
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Km = () => {
  const { km } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <Wrapper>
      <FormLabel>Mileage</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
        >
          <AiOutlineCar />
        </InputLeftElement>
        <Input
          name='km'
          id='km'
          type='number'
          onChange={handleChange}
          placeholder='Enter Km'
          value={km}
        />
      </InputGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Km

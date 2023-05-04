import { getStateValues } from '@/features/cars/carsSlice'
import {
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Price = () => {
  const { price } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <Wrapper>
      <FormLabel>Price</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
        >
          $
        </InputLeftElement>
        <Input
          name='price'
          id='price'
          type='number'
          onChange={handleChange}
          placeholder='Enter amount'
          value={price}
        />
      </InputGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Price

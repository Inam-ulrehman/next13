import { colors } from '@/app/cars/data'
import { getStateValues } from '@/features/cars/carsSlice'
import { titleCase } from '@/lib/helper'
import { FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { useDispatch } from 'react-redux'

const Color = () => {
  const dispatch = useDispatch()

  const handleChange = (value) => {
    dispatch(getStateValues({ name: 'color', value }))
  }
  return (
    <Wrapper>
      <FormLabel>Select Color</FormLabel>
      <RadioGroup onChange={handleChange} defaultValue='1'>
        {colors.map((item, index) => {
          return (
            <Radio key={index} value={item.color}>
              {titleCase(item.color)}
            </Radio>
          )
        })}
      </RadioGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .chakra-radio-group {
  }
  .chakra-radio {
    margin-right: 5px;
    margin-top: 5px;
    border: 2px solid var(--chakra-colors-gray-100);
    padding: 0.4rem;
    :hover {
      cursor: pointer;

      border: 2px solid var(--chakra-colors-teal-200);
    }
  }
`
export default Color

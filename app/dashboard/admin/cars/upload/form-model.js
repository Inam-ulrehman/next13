import { getStateValues } from '@/features/cars/carsSlice'
import { titleCase } from '@/lib/helper'
import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Model = () => {
  const { selectModel } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <div className='model'>
      <FormLabel>Car Model</FormLabel>
      <Select
        onChange={handleChange}
        id={'model'}
        name={'model'}
        placeholder='Select Model'
      >
        {selectModel.map((item, index) => {
          return (
            <option key={index} value={item}>
              {titleCase(item)}
            </option>
          )
        })}
      </Select>
    </div>
  )
}

export default Model

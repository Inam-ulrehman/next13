import { getStateValues } from '@/features/cars/carsSlice'
import { makes } from '@/lib/data/carMakes'
import { titleCase } from '@/lib/helper'
import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

const Make = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <div className='make'>
      <FormControl>
        <FormLabel>Car Make</FormLabel>
        <Select
          onChange={handleChange}
          id={'make'}
          name={'make'}
          placeholder='Select Make'
        >
          {makes.map((item, index) => {
            return (
              <option key={index} value={item.company}>
                {titleCase(item.company)}
              </option>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

export default Make

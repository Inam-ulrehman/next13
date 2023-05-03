'use client'
import CloudinaryWidget from '@/app/components/image/CloudinaryWidget'
import { getStateValues } from '@/features/cars/carsSlice'
import { bodyType } from '@/lib/data/bodyType'
import { makes } from '@/lib/data/carMakes'
import { titleCase } from '@/lib/helper'

import { Button, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import Type from './bodyType'

const Form = () => {
  const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()
  const {
    make,
    model,
    type,
    color,
    year,
    price,
    uploadImages,
    isLoading,
    selectModel,
  } = cars

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        {/* make */}
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
        {/* model */}
        {make.length > 0 && (
          <div className='model'>
            <FormControl>
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
            </FormControl>
          </div>
        )}
        {/* bodyType */}
        <div className='type'>
          <Type />
        </div>
        <div className='color'>color</div>
        <div className='year'>year</div>
        <div className='price'>price</div>
        <CloudinaryWidget />
        <div className='description'></div>
        <Button colorScheme='teal' className='button' type='submit'>
          Submit
        </Button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  padding: 1rem;

  /* mobile */
  @media (max-width: 920px) {
  }
  /* desktop */
  @media (min-width: 920px) {
  }
`
export default Form

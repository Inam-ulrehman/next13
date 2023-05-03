'use client'
import CloudinaryWidget from '@/app/components/image/CloudinaryWidget'
import { getStateValues } from '@/features/cars/carsSlice'
import { bodyType } from '@/lib/data/bodyType'
import { makes } from '@/lib/data/carMakes'
import { titleCase } from '@/lib/helper'

import { Button, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import Type from './form-type'
import Make from './form-make'
import Model from './form-model'
import Color from './form-color'
import Year from './form-year'

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
        <Make />
        {make.length > 0 && <Model />}
        <Type />
        <Color />
        <Year />
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

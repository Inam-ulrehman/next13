'use client'
import { createCarsThunk, getStateValues } from '@/features/cars/carsSlice'

import { Button, Center, FormControl, useToast } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import Type from './form-type'
import Make from './form-make'
import Model from './form-model'
import Color from './form-color'
import Year from './form-year'
import Price from './form-price'
import Image from './form-image'
import Description from './form-description'
import { getItemFromLocalStorage } from '@/lib/localStorage/localStorage'
import { useRouter } from 'next/navigation'

const Form = () => {
  const router = useRouter()
  const toast = useToast()
  const cars = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const uploadImages = getItemFromLocalStorage('uploadImage')
    if (uploadImages?.length === 0 || !uploadImages) {
      return toast({
        description: 'Please Upload Image',
        status: 'info',
        position: 'top-right',
      })
    }
    const year = cars.year.split('-')[0]
    const state = { ...cars, uploadImages, year }
    dispatch(createCarsThunk(state))
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <FormControl isRequired>
          <Make />
          {cars.make.length > 0 && <Model />}
          <Type />
          <Color />
          <Year />
          <Price />
          <Description />
          <Image />
        </FormControl>
        <Center>
          <Button colorScheme='teal' className='button' type='submit'>
            Submit
          </Button>
        </Center>
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

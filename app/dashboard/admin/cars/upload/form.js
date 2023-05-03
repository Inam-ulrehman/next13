'use client'
import CloudinaryWidget from '@/app/components/image/CloudinaryWidget'

import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <div className='make'>
          <input id='make' name='make' type='text' onChange={handleChange} />
        </div>
        <div className='model'>Model</div>
        <div className='type'>type</div>
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

  /* mobile */
  @media (max-width: 920px) {
  }
  /* desktop */
  @media (min-width: 920px) {
  }
`
export default Form

import { getStateValues } from '@/features/cars/carsSlice'
import { bodyType } from '@/lib/data/bodyType'
import { titleCase } from '@/lib/helper'
import { FormLabel } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Type = () => {
  const { type } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const handleClick = (value) => {
    dispatch(getStateValues({ name: 'type', value }))
  }

  return (
    <Wrapper>
      <FormLabel>Select Type</FormLabel>
      <div className='form'>
        {bodyType.map((item, index) => {
          return (
            <div
              onClick={() => handleClick(item.name)}
              className={type === item.name ? 'active container' : 'container'}
              key={index}
            >
              <div className='image'>
                <CldImage
                  src={item.src}
                  width={750}
                  height={750}
                  alt={item.name}
                />{' '}
              </div>{' '}
              {titleCase(item.name)}
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .form {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    margin-top: 0.5rem;
  }
  .container {
    display: flex;
    gap: 5px;
    align-items: center;
    border: 2px solid var(--chakra-colors-gray-100);
    text-align: center;
    padding: 0px 5px;
    :hover {
      cursor: pointer;

      border: 2px solid var(--chakra-colors-teal-200);
    }
    .image {
      max-width: 40px;
      margin: 0 auto;
    }
  }
  .active {
    border: 2px solid var(--chakra-colors-teal-200);
  }
`
export default Type

'use client'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

const initialState = {
  index: 0,
}
const Images = ({ data }) => {
  const [state, setState] = useState(initialState)
  const { index } = state
  const { uploadImages } = data

  return (
    <Wrapper>
      <div className='main-image'>
        <CldImage
          src={uploadImages[index].public_id}
          width={940}
          height={788}
          alt='car'
          priority
        />
      </div>
      <div className='images-container'>
        {uploadImages.map((item, index) => {
          return (
            <div
              onClick={() => setState({ ...state, index })}
              className='container'
              key={index}
            >
              <CldImage
                src={item.public_id}
                width={180}
                height={180}
                alt='car'
              ></CldImage>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-image {
    overflow: hidden;
    border: 2px solid var(--chakra-colors-gray-100);
    border-radius: 10px;
    max-height: 400px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .images-container {
    height: 120px;
    align-items: center;
    :hover {
      cursor: pointer;
    }
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    .container {
      overflow: hidden;
      border: 2px solid var(--chakra-colors-gray-100);
      flex-shrink: 0;
      border-radius: 10px;
      img {
        width: auto;
        height: auto;
      }
    }
  }
  .main-image,
  .images-container {
    width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: 620px) {
    .main-image,
    .images-container {
      width: 60vw;
    }
  }
  @media (max-width: 920px) {
  }
  @media (min-width: 920px) {
    .main-image {
    }
    .main-image,
    .images-container {
      width: 40vw;
    }
  }
`
export default Images

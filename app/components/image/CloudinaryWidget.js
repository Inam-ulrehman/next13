'use client'
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from '@/lib/localStorage/localStorage'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'
const storageImages = getItemFromLocalStorage('uploadImage')

const initialState = {
  uploadImages: [],
}
function CloudinaryWidget() {
  const [state, setState] = useState(initialState)

  const handleUpload = async (event) => {
    event.preventDefault()

    const files = event.target.files
    const formData = new FormData()

    formData.append('file', files[0])
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET)
    formData.append('folder', 'carsell/cars')
    // formData.append('transformation', 'c_pad,h_720,w_720,e_bgremoval')
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      )
      const data = await response.json()

      setState({
        ...state,
        uploadImages: [...state.uploadImages, data.public_id],
      })
      setItemInLocalStorage('uploadImage', [
        ...state.uploadImages,
        data.public_id,
      ])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <Button colorScheme='teal' className='file-upload-container'>
        <label htmlFor='file-upload' className='btn'>
          Upload
          <input
            type='file'
            id='file-upload'
            // ref={imageRef}
            className='custom-file-input'
            onChange={handleUpload}
          />
        </label>
      </Button>

      {state.uploadImages.length > 0 && (
        <div className='container'>
          {state.uploadImages.map((item, index) => {
            return (
              <div key={index} className='container-holder'>
                <div className='image'>
                  <CldImage width={1200} height={1200} src={item} alt='Image' />
                </div>
                <Button colorScheme='red' size={'xs'}>
                  X
                </Button>
              </div>
            )
          })}
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .file-upload-container {
    margin: 1rem;
    max-width: fit-content;
    text-align: center;
    input[type='file'] {
      display: none;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .container-holder {
    width: fit-content;
    position: relative;
    .image {
      max-width: 100px;
      max-height: 100px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`
export default CloudinaryWidget

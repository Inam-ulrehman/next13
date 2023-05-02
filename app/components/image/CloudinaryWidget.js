'use client'
import { customFetch } from '@/lib/axios/customFetch'
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from '@/lib/localStorage/localStorage'
import { Button, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import { useEffect, useState } from 'react'

const initialState = {
  uploadImages: [],
  isLoading: false,
}
function CloudinaryWidget() {
  const [state, setState] = useState(initialState)
  const { isLoading, uploadImages } = state
  const { isOpen, onToggle } = useDisclosure()
  // handle submit
  const handleUpload = async (event) => {
    event.preventDefault()

    const files = event.target.files
    const formData = new FormData()

    formData.append('file', files[0])
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET)
    formData.append('folder', 'carsell/cars')
    // formData.append('transformation', 'c_pad,h_720,w_720,e_bgremoval')
    setState({ ...state, isLoading: true })
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
        isLoading: false,
      })
      setItemInLocalStorage('uploadImage', [
        ...state.uploadImages,
        data.public_id,
      ])
    } catch (error) {
      setState({ ...state, isLoading: false })
      console.log(error)
    }
  }
  // handle delete
  const handleDelete = async (public_id) => {
    try {
      const newImages = uploadImages.filter((item) => item !== public_id)
      setState({
        ...state,
        uploadImages: newImages,
      })
      setItemInLocalStorage('uploadImage', newImages)
      const response = await customFetch.post(`/auth/image/destroy`, {
        public_id,
      })
    } catch (error) {
      setState({ ...state })
      console.log(error)
    }
  }
  // use effect
  useEffect(() => {
    const storageImages = getItemFromLocalStorage('uploadImage')
    if (!storageImages || null) {
      return
    }
    setState({ ...state, uploadImages: storageImages })
  }, [])
  return (
    <Wrapper>
      <Button
        isLoading={isLoading}
        loadingText='Uploading...'
        colorScheme='teal'
        className='file-upload-container'
      >
        <label htmlFor='file-upload' className='btn'>
          Upload
          <input
            type='file'
            id='file-upload'
            className='custom-file-input'
            onChange={handleUpload}
          />
        </label>
      </Button>

      {uploadImages.length > 0 && (
        <div className='container'>
          {uploadImages.map((item, index) => {
            return (
              <motion.div key={index} className='container-holder'>
                <div className='image'>
                  <CldImage width={1200} height={1200} src={item} alt='Image' />
                </div>
                <Button
                  onClick={() => handleDelete(item)}
                  colorScheme='red'
                  size={'xs'}
                >
                  X
                </Button>
              </motion.div>
            )
          })}
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;

  .file-upload-container {
    margin-bottom: 1rem;
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
      background-color: var(--chakra-colors-gray-300);
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

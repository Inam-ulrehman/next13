'use client'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

function CloudinaryWidget() {
  const [image, setImage] = useState('')

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
      console.log(data)
      setImage(data.secure_url)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <input type='file' onChange={handleUpload} />

      {image && (
        <CldImage
          src={image}
          width={720}
          height={720}
          // fill
          alt='image'
        ></CldImage>
      )}
    </div>
  )
}

export default CloudinaryWidget

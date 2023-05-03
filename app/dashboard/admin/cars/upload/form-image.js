import CloudinaryWidget from '@/app/components/image/CloudinaryWidget'
import { FormLabel } from '@chakra-ui/react'
import styled from '@emotion/styled'

import React from 'react'

const Image = () => {
  return (
    <Wrapper>
      <FormLabel>Upload your image</FormLabel>
      <CloudinaryWidget />
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Image

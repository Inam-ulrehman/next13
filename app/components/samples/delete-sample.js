'use client'
import styled from '@emotion/styled'
import React from 'react'

const DeleteSample = ({ _id }) => {
  const handleClick = (_id) => {
    console.log(_id)
  }
  return <Wrapper onClick={() => handleClick(_id)}>DeleteSample</Wrapper>
}

const Wrapper = styled.button`
  background-color: pink;
`
export default DeleteSample

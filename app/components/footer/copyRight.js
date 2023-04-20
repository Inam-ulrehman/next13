'use client'
import styled from '@emotion/styled'
import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const CopyRight = () => {
  return (
    <Wrapper>
      <FaRegCopyright size={20} />
      <span>
        Copyright {new Date().getFullYear()} INAM Web Solutions. All Rights
        Reserved. Web Design and Content Management by INAM Web Solutions.
      </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  border-top: 1px solid var(--chakra-colors-gray-100);
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
`
export default CopyRight

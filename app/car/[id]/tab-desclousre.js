import styled from '@emotion/styled'
import React from 'react'

const Disclosure = ({ data }) => {
  return (
    <Wrapper>
      <p>Previously registered in Ontario.</p>
      <hr />
      <p>
        Was involved in an accident on 01/03/2023 with an estimated $0 of
        damage. On which a $9123 claim was made.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  p {
    padding: 0.5rem 0;
  }
`

export default Disclosure

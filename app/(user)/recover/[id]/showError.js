'use client'

import styled from '@emotion/styled'

const ShowError = ({ error }) => {
  if (error === 'ERR_JWT_EXPIRED') {
    return (
      <Wrapper>
        <p>Your token is Expired.</p>
      </Wrapper>
    )
  }
  console.log(error)
  if (error === 'ERR_JWS_INVALID') {
    return (
      <Wrapper>
        <p>Your token is Invalid.</p>
      </Wrapper>
    )
  }

  console.log(error)
  return (
    <Wrapper>
      <p>Your token is not recognized.</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 58px);
  display: grid;
  place-content: center;
  p {
    font-size: 2rem;
    color: var(--chakra-colors-white);
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--chakra-colors-red-400);
  }
`

export default ShowError

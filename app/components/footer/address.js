import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

const mobile = {
  path: 'tel:4165606790',
  title: '4165606790',
}
const email = {
  path: 'mailto:Support@inamwebsolutions.com',
  title: 'support@inamwebsolutions.com',
}
const address = {
  path: 'https://www.google.com/maps/@43.4450731,-80.4859129,17z',
  title: '86 Cedar Street,Kitchener, ON,  N2G 3L8',
}

const Address = () => {
  return (
    <Wrapper>
      <div className='heading'>OUR ADDRESS</div>
      <ul className='body'>
        <li>
          <Link href={address.path} target={'_blank'} passHref>
            {address.title}
          </Link>
        </li>
        <li>
          <Link href={mobile.path} passHref>
            <span>Mobile:</span> {mobile.title}
          </Link>
        </li>
        <li>
          <Link href={email.path} passHref>
            <span>Email:</span> {email.title}
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .heading {
    font-weight: 600;
    border-bottom: 2px solid var(--chakra-colors-gray-200);
    width: fit-content;
    margin: 0 auto;
  }
  ul {
    padding: 1rem;
    display: grid;
    justify-content: center;
    list-style: none;
  }
  a {
    font-weight: 400;
    color: var(--white);
    :hover {
      color: var(--chakra-colors-red-300);
      border-bottom: 2px solid var(--chakra-colors-red-500);
      span {
        border-bottom: 2px solid var(--primary-5);
        color: var(--primary-5);
      }
    }
  }
  span {
    :hover {
      border: transparent;
    }
  }
`

export default Address

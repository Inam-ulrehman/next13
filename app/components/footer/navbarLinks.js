import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'

const navList = [
  { title: 'Home', path: '/' },
  { title: 'Shop Cars', path: '/cars' },
  { title: 'Sell Online', path: '/dashboard' },
  { title: 'Register', path: '/register' },
  { title: 'Client Portal', path: '/login' },
  { title: 'Contact', path: '/contact' },
]
const NavbarLinks = () => {
  return (
    <Wrapper>
      <div className='heading'>QUICK LINKS</div>
      <ul>
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          )
        })}
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
    font-weight: 400;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 300px;
    margin: 1rem auto;
    list-style-type: none;
    text-align: center;
    li {
      padding: 0.3rem;
    }
    a {
      padding: 5px;

      color: var(--white);
      :hover {
        color: var(--chakra-colors-red-300);
        border-bottom: 2px solid var(--chakra-colors-red-500);
      }
    }
    display: grid;
    justify-content: center;
  }
`

export default NavbarLinks

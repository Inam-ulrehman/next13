import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const facebook = 'https://www.facebook.com/inamwebsolutions'

const linkedin = 'https://www.linkedin.com/in/Inamwebsolutions'

const instagram = 'https://www.instagram.com/inamwebsolutions/'

const twitter = 'https://twitter.com/Inamulrehmn'

const SocialMedia = () => {
  return (
    <Wrapper>
      <div className='heading'>SOCIAL MEDIA</div>
      <ul>
        <li>
          <Link className='facebook' target='_blank' href={facebook} passHref>
            <BsFacebook size={30} />
          </Link>
        </li>
        <li>
          <Link className='linkedin' target='_blank' href={linkedin} passHref>
            <BsLinkedin size={30} />
          </Link>
        </li>
        <li>
          <Link className='instagram' target='_blank' href={instagram} passHref>
            <BsInstagram size={30} />
          </Link>
        </li>
        <li>
          <Link className='twitter' target='_blank' href={twitter} passHref>
            <FaTwitterSquare size={30} />
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;

  .heading {
    font-weight: 600;
    border-bottom: 2px solid var(--chakra-colors-gray-200);
    width: fit-content;
    margin: 0 auto;
  }
  ul {
    padding: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    list-style-type: none;
  }
  .facebook,
  .linkedin,
  .instagram,
  .twitter {
    :hover {
      color: var(--chakra-colors-red-300);
    }
  }
`
export default SocialMedia

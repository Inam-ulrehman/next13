import { bodyType } from '@/lib/data/bodyType'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CldImage } from 'next-cloudinary'
import React from 'react'

const BodyType = () => {
  return (
    <Wrapper>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight={'medium'}>
                Body Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div className='container'>
              {bodyType.map((item, index) => {
                return (
                  <Button mr={2} mt={2} key={index} variant={'outline'}>
                    <div className='image'>
                      <CldImage
                        src={item.src}
                        width={720}
                        height={720}
                        alt={item.name}
                      />
                    </div>
                    <Box as='span' ml={1}>
                      {item.name}
                    </Box>
                  </Button>
                )
              })}
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    .image {
      max-width: 40px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    span {
      text-transform: capitalize;
    }
  }
`
export default BodyType

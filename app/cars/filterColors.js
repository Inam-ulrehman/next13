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
import React from 'react'
import { colors } from './data'

const Colors = () => {
  return (
    <Wrapper>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight={'medium'}>
                Exterior color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div className='container'>
              {colors.map((item, index) => {
                return (
                  <Button
                    fontWeight={'light'}
                    variant={'outline'}
                    mr={1}
                    mt={1}
                    key={index}
                  >
                    <Box
                      as='span'
                      h={5}
                      w={5}
                      borderRadius={'full'}
                      border={'1px solid var(--chakra-colors-gray-400)'}
                      mr={2}
                      backgroundColor={item.hexCode}
                    />{' '}
                    {item.color}
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
  .price-range-input {
    input {
      max-width: 150px;
    }
    display: flex;
    justify-content: space-between;
    .amount {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }
`
export default Colors

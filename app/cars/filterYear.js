import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const Year = () => {
  return (
    <Wrapper>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='p' flex='1' textAlign='left' fontWeight={'medium'}>
                Year
                <Box
                  as='span'
                  display={'block'}
                  flex='1'
                  textAlign='left'
                  fontWeight={'light'}
                >
                  2008 - 2023
                </Box>
              </Box>

              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>hello</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Year

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
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
          <AccordionPanel>
            <div className='year-range-input'>
              <p>price range</p>
              <div className='amount'>
                <Input type='text' />
                <Input type='text' />
              </div>
            </div>
            <RangeSlider
              aria-label={['min', 'max']}
              colorScheme='pink'
              defaultValue={[10, 30]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack></RangeSliderFilledTrack>
              </RangeSliderTrack>
              <RangeSliderThumb index={0}></RangeSliderThumb>
              <RangeSliderThumb index={1}></RangeSliderThumb>
            </RangeSlider>
            <div
              className='year-range'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <span>$0</span>
              <span>$10000.00</span>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.div``
export default Year

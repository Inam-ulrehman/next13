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

const Price = () => {
  return (
    <Wrapper>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight={'medium'}>
                Price & Payments
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div className='price-range-input'>
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
              className='price-range'
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
export default Price

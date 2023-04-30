import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const initialState = {
  yearStart: 2000,
  yearEnd: 2023,
}
const Price = () => {
  const searchParams = useSearchParams()
  const path = usePathname()
  const router = useRouter()
  const [state, setState] = useState(initialState)
  const { yearStart, yearEnd } = state
  function mapRange(value, oldMin, oldMax, newMin, newMax) {
    const oldRange = oldMax - oldMin
    const newRange = newMax - newMin
    const scaledValue = (value - oldMin) / oldRange
    const newValue = newMin + scaledValue * newRange
    return Math.round(newValue)
  }
  const handleValue = (value) => {
    const yearStart = mapRange(value[0], 1, 100, 2000, 2023)
    const yearEnd = mapRange(value[1], 1, 100, 2000, 2023)

    setState({ ...state, yearStart, yearEnd })
  }

  const handleValueEnd = (value) => {
    const yearStart = mapRange(value[0], 1, 100, 2000, 2023)
    const yearEnd = mapRange(value[1], 1, 100, 2000, 2023)
    const otherQuery = searchParams
      .toString()
      .split('&')
      .filter((item) => {
        return !item.startsWith('yearStart') && !item.startsWith('yearEnd')
      })
      .join('&')
      .replace(/%2C/g, ',')
    if (otherQuery) {
      return router.replace(
        `${path}?yearStart=${yearStart}&yearEnd=${yearEnd}&${otherQuery}`
      )
    }

    router.replace(`${path}?yearStart=${yearStart}&yearEnd=${yearEnd}`)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }
  return (
    <Wrapper>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight={'medium'}>
                Year
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div className='price-range-input'>
              <p>price range</p>
              <div className='amount'>
                <Input
                  isReadOnly={true}
                  type='text'
                  value={yearStart}
                  name='yearStart'
                  id='yearStart'
                  onChange={handleChange}
                />

                <Input
                  isReadOnly={true}
                  type='text'
                  value={yearEnd}
                  name='yearEnd'
                  id='yearEnd'
                  onChange={handleChange}
                />
              </div>
            </div>
            <RangeSlider
              aria-label={['min', 'max']}
              colorScheme='red'
              defaultValue={[20, 70]}
              onChangeEnd={(val) => handleValueEnd(val)}
              onChange={(val) => handleValue(val)}
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
              <span>Start - {yearStart}</span>
              <span>End - {yearEnd}</span>
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
      max-width: 100px;
    }
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .amount {
      display: flex;
      justify-content: space-between;

      gap: 1rem;
    }
  }
`
export default Price

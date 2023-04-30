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
  priceLow: `10,000`,
  priceHigh: `50,000`,
}
const Price = () => {
  const searchParams = useSearchParams()
  const path = usePathname()
  const router = useRouter()
  const [state, setState] = useState(initialState)
  const { priceLow, priceHigh } = state

  const handleValue = (value) => {
    const priceLow = (value[0] * 1000).toLocaleString()
    const priceHigh = (value[1] * 1000).toLocaleString()
    setState({ ...state, priceLow, priceHigh })
  }

  const handleValueEnd = (value) => {
    const priceLow = value[0] * 1000
    const priceHigh = value[1] * 1000
    const otherQuery = searchParams
      .toString()
      .split('&')
      .filter((item) => {
        return !item.startsWith('priceLow') && !item.startsWith('priceHigh')
      })
      .join('&')
      .replace(/%2C/g, ',')
    if (otherQuery) {
      return router.replace(
        `${path}?priceLow=${priceLow}&priceHigh=${priceHigh}&${otherQuery}`
      )
    }

    router.replace(`${path}?priceLow=${priceLow}&priceHigh=${priceHigh}`)
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
                Price & Payments
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div className='price-range-input'>
              <p>price range</p>
              <div className='amount'>
                <InputGroup>
                  <InputLeftAddon>$</InputLeftAddon>
                  <Input
                    isReadOnly={true}
                    type='text'
                    value={priceLow}
                    name='priceLow'
                    id='priceLow'
                    onChange={handleChange}
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon>$</InputLeftAddon>
                  <Input
                    isReadOnly={true}
                    type='text'
                    value={priceHigh}
                    name='priceHigh'
                    id='priceHigh'
                    onChange={handleChange}
                  />
                </InputGroup>
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
              <span>${priceLow.toLocaleString()}</span>
              <span>${priceHigh.toLocaleString()}</span>
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

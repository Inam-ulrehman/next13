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
import { titleCase } from '@/lib/helper'
import { useRouter, useSearchParams } from 'next/navigation'
import { filterMakeParams } from './lib'

const Colors = () => {
  const searchParams = useSearchParams()
  const param = searchParams.get('color')
  const router = useRouter()
  const handleClick = (searchProp) => {
    const searchWord = 'color'
    filterMakeParams(searchParams, searchProp, param, router, searchWord)
  }
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
                    onClick={() => handleClick(item.color)}
                    fontWeight={'light'}
                    variant={'outline'}
                    mr={1}
                    mt={1}
                    key={index}
                    className={param?.match(item.color) ? 'active' : ''}
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
                    {titleCase(item.color)}
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
  .active {
    border: 2px solid var(--chakra-colors-red-200);
  }
`
export default Colors

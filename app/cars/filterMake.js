import { makes } from '@/lib/data/carMakes'
import { titleCase } from '@/lib/helper'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { filterMakeParams } from './lib'

const Make = () => {
  const searchParams = useSearchParams()
  const param = searchParams.get('make')
  const router = useRouter()

  const handleSelect = (searchProp) => {
    const searchWord = 'make'
    filterMakeParams(searchParams, searchProp, param, router, searchWord)
  }
  return (
    <Wrapper>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight={'medium'}>
                Make, Model & Trim
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className='container'>
              {makes.map((item, index) => {
                return (
                  <div key={index}>
                    <Checkbox
                      isChecked={param?.match(item.company) ? true : false}
                      onChange={() => handleSelect(item.company)}
                      size={'lg'}
                    >
                      {titleCase(item.company)}
                    </Checkbox>
                  </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export default Make

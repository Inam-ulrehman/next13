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
import React, { useEffect } from 'react'

const Make = () => {
  const searchParams = useSearchParams()
  const make = searchParams.get('make')
  const pathName = usePathname()
  const router = useRouter()

  const handleSelect = (company) => {
    const otherQuery = searchParams
      .toString()
      .split('&')
      .filter((item) => !item.startsWith('make'))
      .join('&')
    if (make) {
      if (make.match(company)) {
        const remove = make
          .split(',')
          .filter((item) => !item.startsWith(company))
          .toString()
        if (remove.length === 0) {
          if (otherQuery) {
            return router.push(`cars?${otherQuery}`)
          }
          return router.push(`cars?`)
        }
        if (otherQuery) {
          return router.push(`cars?make=${remove}&${otherQuery}`)
        }
        return router.push(`cars?make=${remove}`)
      }
      const filterMake = searchParams
        .toString()
        .split('&')
        .filter((item) => item.startsWith('make'))
        .toString()

      let previousMake = filterMake
        .toString()
        .split('=')[1]
        .replace(/%2C/g, ',')

      if (otherQuery) {
        router.push(`cars?make=${previousMake},${company}&${otherQuery}`)
        return
      }
      router.push(`cars?make=${previousMake},${company}`)
      return
    }
    if (otherQuery) {
      return router.push(`cars?make=${company}&${otherQuery}`)
    }
    router.push(`cars?make=${company}`)
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

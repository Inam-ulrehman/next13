import { makes } from '@/lib/data/carMakes'
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
import React from 'react'

const Make = () => {
  const searchParams = useSearchParams()
  const make = searchParams.get('make')
  const pathName = usePathname()
  const router = useRouter()

  const handleSelect = (company) => {
    console.log(company)
    router.replace(`${pathName}?make=${company}`)
    if (make) {
    }
    // if (make) {
    //   const newSearchParams = filterParams(searchParams, 'make')
    //   router.replace(`${pathName}?make=${item.path}${newSearchParams}`)
    //   return
    // }
    // router.replace(`${pathName}?make=${item.path}`)
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
                      {item.company}
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

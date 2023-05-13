import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import Overview from './tab-overview'
import Feature from './tab-feature'
import Specs from './tab-specs'
import Disclosure from './tab-desclousre'

const TabsHolder = ({ data }) => {
  return (
    <Wrapper>
      <Tabs colorScheme='red'>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Features</Tab>
          <Tab>Specs</Tab>
          <Tab>Disclosure</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Overview data={data} />
          </TabPanel>
          <TabPanel>
            <Feature data={data} />
          </TabPanel>
          <TabPanel>
            <Specs data={data} />
          </TabPanel>
          <TabPanel>
            <Disclosure data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .chakra-tabs__tab {
    font-size: large;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    .chakra-tabs__tab {
      font-size: small;
    }
  }
`
export default TabsHolder

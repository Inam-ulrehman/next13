'use client'
import styled from '@emotion/styled'
import DashboardNav from './dashboardNav'

const Section = ({ children }) => {
  return (
    <Wrapper>
      <DashboardNav />

      {children}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;

  /* mobile ipad */
  @media (max-width: 920px) {
  }
  /* desktop */
  @media (min-width: 920px) {
    display: flex;
  }
`
export default Section

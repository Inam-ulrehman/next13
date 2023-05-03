'use client'

import styled from '@emotion/styled'
import DashboardNav from './dashboardNav'

export default function DashboardLayout({ children }) {
  return (
    <Wrapper>
      <DashboardNav />
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* mobile ipad */
  @media (max-width: 920px) {
  }

  /* desktop */
  @media (min-width: 920px) {
    display: grid;
    grid-template-columns: 200px auto;
  }
`

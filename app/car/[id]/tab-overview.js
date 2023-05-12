import styled from '@emotion/styled'
import React from 'react'
import { AiOutlineDashboard, AiOutlineSafetyCertificate } from 'react-icons/ai'
import { BsFillFuelPumpDieselFill, BsKey } from 'react-icons/bs'
import { MdOutlineAirlineSeatReclineNormal } from 'react-icons/md'
import { TbEngine } from 'react-icons/tb'

const Overview = ({ data }) => {
  return (
    <Wrapper>
      <div className='box-1'>
        <div className='box'>
          <AiOutlineDashboard size={34} />
          <span>{data.km} km</span>
        </div>
        <div className='box'>
          <BsFillFuelPumpDieselFill size={34} />
          <span>
            <span style={{ display: 'grid' }}>{10.5} city</span>
            <span>{8.3} highway</span>
          </span>
        </div>
        <div className='box'>
          <BsKey size={34} />
          <span>{2} keys</span>
        </div>
      </div>
      <div className='box-2'>
        <div className='box'>
          <MdOutlineAirlineSeatReclineNormal size={34} />
          <span>{5} seats</span>
        </div>
        <div className='box'>
          <TbEngine size={34} />
          <span>Automatic </span>
        </div>
        <div className='box'>
          <AiOutlineSafetyCertificate size={34} />
          <span>CarMax</span>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  .box {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
    padding: 1rem 0;
  }
`
export default Overview

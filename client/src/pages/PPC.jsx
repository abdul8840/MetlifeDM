import React from 'react'
import PPCHero from '../components/PPCHero'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'

const PPC = ({data, banner}) => {
  return (
    <div>
      <PPCHero />
      <Banner banner={banner} />
      <ServiceContent data={data} />
    </div>
  )
}

export default PPC

import React from 'react'
import WDBanner from '../components/WDBanner'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'

const WebDesign = ({data, banner}) => {
  return (
    <div>
      <WDBanner />
      <Banner banner={banner} />
      <ServiceContent data={data} />
    </div>
  )
}

export default WebDesign

import React from 'react'
import ServiceHero from '../components/ServiceHero'
import MainServices from '../components/MainServices'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'

const Services = ({data, banner}) => {
  return (
    <div>
      <ServiceHero />
      <MainServices />
      <ServiceContent data={data} />
      <Banner banner={banner} />
    </div>
  )
}

export default Services
Services
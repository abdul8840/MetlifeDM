import React from 'react'
import MainServices from '../components/MainServices'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Services = ({data, banner, hero}) => {
  return (
    <div>
      <Hero hero={hero} />
      <MainServices />
      <ServiceContent data={data} />
      <Banner banner={banner} />
    </div>
  )
}

export default Services
Services
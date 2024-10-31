import React from 'react'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const SEO = ({data, banner, hero}) => {
  return (
    <div>
      <Hero hero={hero} />
      <Banner banner={banner} />
      <ServiceContent data={data} />
    </div>
  )
}

export default SEO

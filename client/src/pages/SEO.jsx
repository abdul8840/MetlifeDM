import React from 'react'
import SEOHero from '../components/SEOHero'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'

const SEO = ({data, banner}) => {
  return (
    <div>
      <SEOHero />
      <Banner banner={banner} />
      <ServiceContent data={data} />
    </div>
  )
}

export default SEO

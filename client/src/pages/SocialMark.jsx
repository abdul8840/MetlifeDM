import React from 'react'
import SMHero from '../components/SMHero'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'

const SocialMark = ({data, banner}) => {
  return (
    <div>
      <SMHero />
      <Banner banner={banner} />
      <ServiceContent data={data} />
    </div>
  )
}

export default SocialMark

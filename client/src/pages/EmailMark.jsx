import React from 'react'
import EMHero from '../components/EMHero'
import ServiceContent from '../components/ServiceContent'
import Banner from '../components/Banner'

const EmailMark = ({data, banner}) => {
  return (
    <div>
        <EMHero />
        <Banner banner={banner} />
        <ServiceContent data={data} />
    </div>
  )
}

export default EmailMark

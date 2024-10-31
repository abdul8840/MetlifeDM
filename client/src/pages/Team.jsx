import React from 'react'
import TeamAccBanner from '../components/TeamAccBanner'
import TeamContent from '../components/TeamContent'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const Team = ({banner, hero}) => {
  return (
    <div>
      <Hero hero={hero} />
      <Banner banner={banner} />
      <TeamAccBanner />
      <TeamContent />
    </div>
  )
}

export default Team
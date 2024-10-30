import React from 'react'
import TeamHero from '../components/TeamHero'
import TeamAccBanner from '../components/TeamAccBanner'
import TeamContent from '../components/TeamContent'
import Banner from '../components/Banner'

const Team = ({banner}) => {
  return (
    <div>
      <TeamHero />
      <Banner banner={banner} />
      <TeamAccBanner />
      <TeamContent />
    </div>
  )
}

export default Team
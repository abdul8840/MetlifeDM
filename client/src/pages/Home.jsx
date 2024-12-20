import React from 'react'
import Hero from '../components/Hero'
import HomeContent from '../components/HomeContent'
import Services from '../components/Services'
import Banner from '../components/Banner'
import Accbanner from '../components/Accbanner'
import FAQ from '../components/FAQ'

const Home = ({banner, hero}) => {
  return (
    <div>
      <Hero hero={hero} />
      <Banner banner={banner} />
      <hr />
      <HomeContent />
      <Services />
      <Accbanner />
      <FAQ />
    </div>
  )
}

export default Home

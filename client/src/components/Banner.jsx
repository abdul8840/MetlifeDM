import React from 'react'
import '../index.css'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Banner = ({banner}) => {
  return (
    <div className='banner'>
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 py-[40px]">
        <h2 className='text-xl sm:text-2xl md:text-4xl  text-white font-bold text-center'>{banner.head}</h2>
        <h4 className='text-center mt-2 text-white text-lg sm:text-xl'>{banner.slogan}</h4>
        <Link to="/contact">
          <Button className="w-[200px] mx-auto mt-5" gradientDuoTone="pinkToOrange">Click here</Button>
        </Link>
      </div>
    </div>
  )
}

export default Banner

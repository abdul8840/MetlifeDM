import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const WDHeroBanner = () => {
    return (
        <div className='banner'>
          <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 py-[40px]">
            <div className="flex flex-col justify-center">
            <h2 className='text-xl sm:text-2xl md:text-4xl  text-white font-bold text-center'>What To Build Your Website? With Our Experts!</h2>
            <h4 className='text-center mt-2 text-white text-lg sm:text-xl'>"Your Success, Our Mission"</h4>
    
            <Link to="/contact">
            <Button className="w-[200px] mx-auto mt-5" gradientDuoTone="pinkToOrange">Click here</Button>
            </Link>
            </div>
          </div>
        </div>
      )
    }

export default WDHeroBanner

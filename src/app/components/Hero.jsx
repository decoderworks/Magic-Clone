import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-gray-100 md:max-h-full sm:max-h-full sm:text-4xl'>
        <h4 className='mx-24 my-24 text-black font-bold md:text-6xl'>
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">The World's Best <br /> </span>
       <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300'>Assistant </span>For High-<br />
       <span className='font-bold text-black'>Growth Companies</span>
        </h4>
        <p className='text-black mx-24 realtive -mt-20 md:text-2xl sm:text-base'>Magic Combines the best assistants in the world with AI <br />
            tools to make getting worke done more efficient.
        </p>
        <div className='md:flex md:ml-96 md:mt-7 sm:-ml-24'>
            <Image className='md:pl-6 md:ml-72 md:mr-48 md:-mt-96' src="/image/hero.webp" width={600} height={700} alt="hero logo" />
        </div>
        
        <div className='max-h-full bg-gray-100 -mt-4 sm:px-2 sm:p-1 sm:text-sm md:mt-1 sm:mt-5 sm:mb-10 sm:-ml-8'>
        <a
          href="#"
          class="p-3 px-6 ml-32 pt-2 text-white bg-blue-800 rounded-full hover:bg-blue-400"
          >Get Started</a
        >
            <h1 className='text-black -mt-8 ml-72 md:text-lg md:font-bold md:-pt-3 sm:text-sm sm:-mt-6 sm:font-bold'>Learn More</h1>
        </div>   
    </div>
  )
}

export default Hero
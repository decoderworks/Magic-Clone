import Image from 'next/image'
import React from 'react'

const AnotherHero = () => {
  return (
    <div className='text-black md:mt-12 sm:mt-3'>
        <div className='md:mt-8 md:w-1/2'>
            <Image src="/image/another-hero.webp" width={1000} height={400} alt="another hero image" />
        </div>
        <div className='md:flex md:flex-col md:p-9 md:rounded-md md:ml-96 md:-mt-96'>
            <div className='md:ml-48 md:-mt-24 sm:ml-4'>
            <h1 className='md:font-bold md:ml-72 sm:font-bold sm:ml-24 sm:text-sm sm:mt-2'>T H E  W O R L D S  B E S T</h1>
            <h2 className='md:text-4xl md:font-bold md:ml-32 md:mt-2 sm:text-2xl sm:font-bold sm:ml-7'>Magic Executive Assistants</h2>
            </div>
            <p className='md:text-2xl md:mt-2 md:ml-72 sm:ml-2'>Magic Executive Assistants provide next-level support. Delegate your email, calendar, travel, and to do list. Perform complex requests such as helping you coordinate events, fundraising and sales. You’ll be amazed at how much time you’ll save by working with a Magic EA.</p>
        </div>
        <div className='md:max-h-full md:mt-1 md:ml-96 sm:mt-4 sm:-ml-24'>
        <a
          href="#"
          class="p-3 px-6 md:ml-72 sm:ml-52 pt-2 text-white bg-blue-800 rounded-full baseline hover:bg-blue-400"
          >Explore Magic EAs</a
        >
        </div>  
    </div>
  )
}

export default AnotherHero
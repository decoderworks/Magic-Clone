import React from 'react'
import Image from 'next/image'

const Company = () => {
  return (
    <div className='text-black items-center md:ml-96 md:mt-5 md:mb-9'>
        <h1 className='items-center md:ml-32 md:text-xl font-bold sm:ml-40 sm:mt-2'>As featured in</h1>
        <div className='md:mt-2 md:-ml-32 md:flex md:gap-8 sm:flex md:w-64 sm:w-24 sm:gap-8 sm:mt-2'>
            <Image src="/image/Frame.svg" alt="frame" width={150} height={150} />
            <Image src="/image/Frame-1.svg" alt="frame" width={150} height={150} />
            <Image src="/image/Frame-2.svg" alt="frame" width={150} height={150} />
            <Image src="/image/Frame-3.svg" alt="frame" width={150} height={150} />
        </div>
    </div>
  )
}

export default Company
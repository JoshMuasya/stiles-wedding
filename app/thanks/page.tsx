import React from 'react';

import Image from 'next/image';

import top from '../../public/decot.png';
import bottom from '../../public/decob.png';
import Link from 'next/link';

const CoverPage = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center h-screen w-full bg-beige'>
      <div className="w-2/3 h-5/6 bg-cardback rounded-xl text-blue flex flex-col justify-center align-middle items-center">
        <div className='relative w-11/12 h-5/6'>
          <Image 
            className='absolute top-0 right-0 z-10'
            src={top}
            alt='Top'
            width={200}
            height={200}
          />

          {/* Content */}
          <div className='flex flex-col justify-center align-middle items-center text-blue'>
            <div className='font-dancing font-bold text-l py-5'>
                THANK YOU
            </div>

            <div className='font-mont text-m font-bold py-5'>
                See you on April, Sat 20, 2024
            </div>

            <div className='font-mont text-m font-bold py-5'>
                At the Machakos Showground
            </div>
          </div>

          <Image 
            className='absolute bottom-0 left-0 z-10'
            src={bottom}
            alt='Top'
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

export default CoverPage
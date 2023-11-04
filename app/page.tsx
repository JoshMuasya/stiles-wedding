import React from 'react';

import Image from 'next/image';

import top from '../public/flowers.png';
import bottom from '../public/flowersbottom.png';
import Link from 'next/link';

const CoverPage = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center h-screen w-full bg-beige'>
      <div className="w-2/3 h-5/6 bg-cardback rounded-xl text-blue flex flex-col justify-center align-middle items-center">
        <div className='relative w-11/12 h-5/6'>
          <div className='border-2 border-borderbeige rounded-xl absolute top-0 w-full h-full'>
            <Image 
              className='absolute top-0 left-0 z-10'
              src={top}
              alt='Top'
              width={250}
              height={250}
            />

            {/* Content */}
            <div className='flex flex-col justify-center align-middle items-center text-blue'>
              {/* Top */}
              <div className='font-mont text-blue font-bold text-m flex flex-col justify-center items-center align-middle pt-2 pb-3'>
                <h1>
                  TOGETHER
                </h1>

                <h1>
                  WITH OUR FAMILIES
                </h1>

                <h1>
                  WE
                </h1>
              </div>

              {/* Names */}
              <div className='font-dancing text-blue font-bold text-l flex flex-col justify-center items-center align-middle pb-3'>
                <h1>
                  BENARD MUTHUI JOSEPH
                </h1>

                <h1>
                  &
                </h1>

                <h1>
                  MIRRIAM MWONGELI MICHAEL
                </h1>
              </div>

              {/* Bottom */}
              <div className='font-mont text-blue font-bold text-m flex flex-col justify-center items-center align-middle pb-3'>
                <h1>
                  INVITE YOU TO CELEBRATE
                </h1>

                <h1>
                  OUR WEDDING
                </h1>
              </div>

              {/* Dates */}
              <div className='flex flex-row justify-center align-middle items-center font-mont text-blue font-bold text-m pb-3'>
                <div className='pr-6'>
                  APRIL
                </div>

                <div className='border-blue h-20 border-2 mr-5'/>

                <div className='flex flex-col justify-center items-center align-middle'>
                  <div>
                    SAT
                  </div>

                  <div>
                    20
                  </div>
                </div>

                <div className='border-blue h-20 border-2 ml-5'/>

                <div className='pl-7'>
                  2024
                </div>
              </div>

              {/* Button */}
              <div className='buttonback h-fit w-fit rounded-xl'>
                <div className='bg-blue hover:bg-beige opacity-60 p-3 rounded-xl'>
                  <Link
                    href="/details"
                    className='text-beige hover:text-blue font-frank font-bold text-sm hover:text-ms'
                  >
                    More Details                
                  </Link>
                </div>
              </div>
            </div>

            <Image 
              className='absolute bottom-0 right-0 z-10'
              src={bottom}
              alt='Top'
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverPage
import React from 'react';

import Image from 'next/image';

import top from '../../public/flowers.png';
import bottom from '../../public/flowersbottom.png';
import Link from 'next/link';

const CoverPage = () => {
  return (
    <div className='flex flex-col justify-center align-middle items-center h-screen w-full bg-beige'>
      <div className="w-2/3 h-5/6 bg-cardback rounded-xl text-blue flex flex-col justify-center align-middle items-center">
        <div className='relative w-11/12 h-5/6'>
            <Image 
              className='absolute top-0 left-0 z-10'
              src={top}
              alt='Top'
              width={250}
              height={250}
            />

            {/* Content  */}
            <div className='z-20 flex flex-col justify-center items-center align-middle text-blue'>
                {/* Title */}
                <div className='font-dancing font-bold text-l py-5'>
                    DETAILS
                </div>

                {/* Venue */}
                <div className='flex flex-col justify-center align-middle items-center'>
                    <div className='font-mont text-m font-bold flex flex-col justify-center align-middle items-center pb-5'>
                        <h1>
                            Looking forward to seeing
                        </h1>

                        <h1>
                            at the Machakos Showground
                        </h1>

                        <h1>
                            on 20th April 2024
                        </h1>
                    </div>
                    <div>
                        Map
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
  )
}

export default CoverPage
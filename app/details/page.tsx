import React from 'react';

import Image from 'next/image';

import top from '../../public/flowers.png';
import bottom from '../../public/flowersbottom.png';
import Link from 'next/link';

import Map from '../components/map';

const CoverPage = () => {
  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4171279176144!2d37.25143047425073!3d-1.5185275359225312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f812a85660623%3A0x920bb1ea7d3b88d2!2sMACHAKOS%20AGRICULTURAL%20SHOW%20GROUND.!5e0!3m2!1sen!2ske!4v1699266092302!5m2!1sen!2ske'

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
              <div 
                className='rounded-md mb-3'
              >
                <Map 
                  src={mapSrc} 
                  width={500} 
                  height={300}
                />                
              </div>
            </div>

            {/* Button */}
            <div className='buttonback h-fit w-fit rounded-xl'>
              <div className='bg-blue hover:bg-beige opacity-60 p-3 rounded-xl'>
                <Link
                  href="/rsvp"
                  className='text-beige hover:text-blue font-frank font-bold text-sm hover:text-ms'
                >
                  R.S.V.P                
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
  )
}

export default CoverPage
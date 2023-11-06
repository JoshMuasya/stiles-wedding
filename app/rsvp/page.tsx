'use client'

import React, { useState } from 'react';

import Image from 'next/image';

import top from '../../public/decot.png';
import bottom from '../../public/decob.png';

type FormData = {
  name: string,
  email: string,
  phonenumber: string,
  amount: number,
}

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    amount: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const requestData = {
      phoneNumber: formData.phonenumber,
      amount: formData.amount,
    };

    fetch('http://127.0.0.1:8000/customer2business/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log( error);
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const { name, value } = e.target;

    if (name === 'phonenumber' && /^07\d{8}$/.test(value)) {
      setFormData((prev) => ({
        ...prev, 
        [name]: value,
      }));
    } else if (name !== 'phonenumber') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // setFormData(prev => ({
    //   ...prev, 
    //   [e.target.name]: e.target.value,
    // }))
  }

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
            <div className='flex flex-col justify-center align-middle items-center'>
                <div className='font-dancing font-bold text-l py-5'>
                  R.S.V.P
                </div>

                {/* Form */}
                <div>
                    <form 
                      onSubmit={handleSubmit}
                      className='flex flex-col justify-center align-middle items-center font-mont font-bold text-blue'
                    >
                      {/* Name */}
                      <input 
                        type="text" 
                        placeholder="Name:" 
                        className="input input-ghost w-full max-w-xs text-sx mb-5" 
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                      />

                      {/* Email */}
                      <input 
                        type="email" 
                        placeholder="Email:" 
                        className="input input-ghost w-full max-w-xs text-sx mb-5" 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                      />

                      {/* Phonenumber */}
                      <input 
                        type="text" 
                        placeholder="Phonenumber:" 
                        className="input input-ghost w-full max-w-xs text-sx mb-5"
                        name='phonenumber'
                        value={formData.phonenumber} 
                        onChange={handleChange}
                      />

                      {/* Label */}
                      <div className='text-sm font-mont font-bold'>
                        We would love and appreciate 
                      </div>

                      <div className='text-sm font-mont font-bold mb-5'>
                        your Monetary Support
                      </div>

                      {/* Amount */}
                      <input 
                        type="number" 
                        placeholder="Any Amount will be appreciated" 
                        className="input input-ghost w-full max-w-xs text-sx mb-5"
                        name='amount' 
                        value={formData.amount}
                        onChange={handleChange}
                      />

                      {/* Button */}
                      <div className='buttonback h-fit w-fit rounded-xl mt-5'>
                        <div className='bg-blue hover:bg-beige opacity-60 p-3 rounded-xl text-beige hover:text-blue text-sm hover:text-ms'>
                          <button
                            className='font-frank font-bold'
                            type='submit'
                          >
                            R.S.V.P                
                          </button>
                        </div>
                      </div>
                    </form>
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

export default RSVP
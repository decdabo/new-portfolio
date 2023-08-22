'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

const page = () => {
  return (
    <section className='h-[100vh] w-full md:px-[5%] px-10 relative z-10'>
      <main className='md:flex flex-row min-h-[80vh] max-h-[70vh] pt-7'>
        <div className='main-photo-background'></div>
        <h3 className='hidden md:block text-white mt-5 text-lg align-bottom self-center -translate-x-10 translate-y-10 h-1/4 font-medium w-2/4 md:max-w-lg'>Hello I'm <span className='text-teal-600 font-medium'>David Caro</span>, Frontend Developer with Next, React, Astro and Tailwind <span className='text-teal-600 font-medium'>&&</span> Backend Developer with NestJS, Docker and MongoDB with Mongoose.</h3>
      </main>
      <section className='text-white mt-5 font-medium flex flex-row items-center gap-5 relative pl-10'>
        <div className='font-normal text-sm flex flex-col gap-2'>
          <span>Mail: david.caro.dec@hotmail.com</span>
          <span>Phone: +54 9 345 418 4602</span>
        </div>
        <div className='text-6xl'>
          I love {' '}
          <span className='text-teal-600'>
            <Typewriter 
              loop 
              cursor 
              words={['Backend', 'Frontend', 'do deploys', 'audiovisual', 'MERN Stack']} 
              typeSpeed={100} 
              deleteSpeed={50} 
              cursorStyle="|||" 
              cursorColor='#0891b2' 
            />
          </span>
        </div>
      </section>
    </section>
  )
}

export default page;

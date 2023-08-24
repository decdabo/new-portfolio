import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const Home = () => {
  return (
    <section className='h-[100vh] w-full md:px-[5%] px-10 relative z-10'>
      <main className='flex flex-row min-h-[80vh] max-h-[70vh] pt-7 items-center'>
        <div className='main-photo-background hidden sm:block'></div>
        <h3 className='text-white text-md sm:text-xl h-auto w-full max-w-none sm:align-bottom sm:self-center sm:-translate-x-10 translate-y-10 sm:h-1/4 font-bold sm:w-2/4 sm:max-w-lg'>Hello I'm <span className='text-teal-600 '>David Caro</span>, Frontend Developer with Next, Astro, Tailwind <span className='text-teal-600 font-medium'>&</span> Backend Developer with NestJS, Docker and MongoDB everytime with Typescript, please.</h3>
      </main>
      <section className='text-white mt-5 font-medium flex flex-row items-center gap-5 relative pl-10'>
        <div className='hidden font-normal text-sm sm:flex flex-col gap-2'>
          <span><strong className='text-teal-600'>Mail:</strong> david.caro.dec@hotmail.com</span>
          <span><strong className='text-teal-600'>Phone:</strong> +54 9 345 418 4602</span>
        </div>
        <div className='text-3xl md:text-4xl lg:text-6xl'>
          I love {' '}
          <span className='text-teal-600'>
            <Typewriter 
              loop 
              cursor 
              words={[
                'develop', 
                'software architecture', 
                'audiovisual', 
                'learn', 
                'team work', 
                'technology'
              ]}
              typeSpeed={100} 
              deleteSpeed={50} 
              cursorStyle=";" 
              cursorColor='#0891b2' 
            />
          </span>
        </div>
      </section>
    </section>
  )
}

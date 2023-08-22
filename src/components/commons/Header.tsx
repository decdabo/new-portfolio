import { useState } from 'react'
import Image from 'next/image';
import Logo from '@/assets/img/logo.png';

export const Header = () => {
  const [ showNav, setShowNav ] = useState<boolean>(false);
  
  return (
    <header className='p-6 pl-9 fixed flex items-center justify-between top-0 h-28 w-full z-[100]'>
      <button className='h-2/4 overflow-hidden text-xl'>
        <div className='h-full transition-all duration-500 ease hover:-translate-y-full'>
          <span className='flex gap-1 font-medium h-full items-center'>
            <span className='text-teal-600'>David</span><span className='text-white'>Caro</span><Image src={Logo} alt='logo' className='w-7 h-7'/>
          </span>
          <span className='h-full flex gap-1 font-medium items-center'><span className='text-teal-600'>Download</span><span className='text-white'>CV</span></span>
        </div>
      </button>
      <ul 
        className={`text-gray-400 ease duration-300 md:translate-x-0 font-medium text-md fixed block bg-gray-800 opacity-80 w-full h-2/4 top-[15%] left-[0%] rounded-sm justify-evenly md:bg-inherit md:relative md:flex md:w-2/5`}
        style={{ transform: `translateX(${showNav ? '0' : '0%'})` }}  
      >
        <li className='h-1/4 flex items-center justify-center hover:text-gray-100 transition-all ease duration-300 cursor-pointer'>Home</li>
        <li className='h-1/4 flex items-center justify-center hover:text-gray-100 transition-all ease duration-300 cursor-pointer'>About</li>
        <li className='h-1/4 flex items-center justify-center hover:text-gray-100 transition-all ease duration-300 cursor-pointer'>Portfolio</li>
        <li className='h-1/4 flex items-center justify-center hover:text-gray-100 transition-all ease duration-300 cursor-pointer'>Contact</li>
      </ul>
      <button className='block md:hidden' onClick={() => setShowNav(!showNav)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400 focus:text-teal-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </header>
  )
}
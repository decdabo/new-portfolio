import { useEffect, useState } from 'react'
import Image from 'next/image';
import Logo from '@/assets/img/logo.png';
import { useContextRouter } from '@/context/RouterContext';
import { RoutesTypes } from '@/context/types/routes';

export const Header = ({ setAnimationState  }: any) => {
  const { path }: any = useContextRouter();
  const [ showNav, setShowNav ] = useState<boolean>(false);

  const handleChangeRoute = (buttonLink: string) => {
    if (path === buttonLink) return;
    if (window.innerWidth < 768) setShowNav(false)

    setAnimationState({ path: buttonLink, animation: true })
  }

  const NavData = [
    {
      linkName: 'Home',
      path: RoutesTypes.HOME_PAGE
    },
    {
      linkName: 'Resume',
      path: RoutesTypes.RESUME_PAGE
    },
    {
      linkName: 'Works',
      path: RoutesTypes.PORTFOLIO_PAGE
    },
    {
      linkName: 'Contact',
      path: RoutesTypes.CONTACT_PAGE
    },
  ]

  useEffect(() => (window.innerWidth > 768) ? setShowNav(true) : setShowNav(false), [])
  
  return (
    <header className='p-6 pl-9 fixed flex items-center justify-between top-0 h-28 w-full z-[100]'>
      <button className='h-2/4 overflow-hidden text-xl'>
        <div className='h-full transition-all duration-500 ease hover:-translate-y-full' >
          <span className='flex gap-1 font-medium h-full items-center'>
            <span className='text-teal-600'>David</span><span className='text-white'>Caro</span><Image src={Logo} alt='logo' className='w-7 h-7'/>
          </span>
          <span className='h-full flex gap-1 font-medium items-center'>
            <span className='text-teal-600'>Download</span>
            <span className='text-white'>CV</span>
          </span>
        </div>
      </button>
      <ul 
        className={`flex-col md:flex-row text-gray-400 overflow-hidden ease duration-300 md:translate-x-0 font-medium text-md fixed bg-gray-800 opacity-90 w-full h-4/5 md:h-2/4 top-[15%] left-[0%] rounded-sm justify-evenly md:bg-inherit md:relative flex md:w-2/5`}
        style={{ transform: `translateX(${showNav ? '0' : '100%'})` }}  
      >
        {
          NavData.map(data => {
            return (
              <li key={data.linkName} style={{ color: path === data.path ? 'white' : '' }} className='h-full flex items-center justify-center hover:text-gray-100 transition-all ease duration-300'>
                <button 
                  onClick={() => handleChangeRoute(data.path)}
                  type='button' 
                  className='h-full flex flex-col items-center justify-center md:justify-normal gap-1 transition-all duration-500 ease md:hover:-translate-y-full'
                >
                  <span>{data.linkName}</span>
                  <span className='hidden md:block'>{data.linkName}</span>
                </button>
              </li>
            )
          })
        }
      </ul>
      <button className='block md:hidden' onClick={() => setShowNav(!showNav)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400 focus:text-teal-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </header>
  )
}
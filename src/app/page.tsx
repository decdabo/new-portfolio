'use client'
import React from 'react'
import { useContextRouter } from '@/context/RouterContext'
import { RouterTypesActions } from '@/context/types/routes';
import { Home } from '@/components/home/Home';

const page = () => {
  const { path } :any = useContextRouter();
  return (
    <>
      { path === RouterTypesActions.HOME_ACTION && <Home /> }
      { path === RouterTypesActions.RESUME_ACTION && <div className='text-white text-[5vh]'><span>Sexooo</span></div> }
    </>
  )
}

export default page;

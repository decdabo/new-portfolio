import useMousePosition from '@/utils/useMousePosition';
import React from 'react'

export const MouseFollower = () => {
  const { clientX, clientY } = useMousePosition(); 
  return (
    <div 
      style={{ 
        top: clientY, 
        left: clientX, 
        transform: "translate(-50%, -50%)" 
      }} 
      className='bg-teal-600 fixed z-10 w-7 h-7 opacity-70 rounded-full'
    />
  )
}

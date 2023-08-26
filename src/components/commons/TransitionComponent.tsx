import { useContextRouter } from '@/context/RouterContext';
import { RoutesTypes } from '@/context/types/routes';
import React, { useEffect, useState, FC } from 'react'

interface TransitionComponentProps {
  animationState: AnimationState,
  setAnimationState: any,
}

interface AnimationState {
  path: RoutesTypes;
  animation: boolean;
}

export const TransitionComponent:FC<TransitionComponentProps> = ({ animationState, setAnimationState }) => {
  const { _, setPath }: any = useContextRouter();
  const [ show, setShow ] = useState<boolean>(false);
  const [ isAnimationActive, setIsAnimationActive ] = useState<boolean>(false);

  async function animation() {
    return new Promise( resolve => {
      setShow(true);
      setTimeout(() => setIsAnimationActive(true), 100)
      setTimeout(() => {
        setPath(animationState.path);
        setIsAnimationActive(false)
        setAnimationState(false)
      }, 1450)
      setTimeout(() => resolve(undefined), 2500)
    }) 
  }
  useEffect(() => {
    if (animationState.animation) {
      animation()
      .then(() => setShow(false))
    }
  }, [animationState.animation])
  return (
    <section className='absolute overflow-hidden ease top-0 right-0 w-[100vw] h-[100vh] z-[100]' style={{ display: show ? 'flex' : 'none' }}>
      <div className='h-full ease duration-700 w-1/4 bg-[#111111] delay-100' style={{ transform: `translateY(${isAnimationActive ? '0' : '100%' })` }} />
      <div className='h-full ease duration-700 w-1/4 bg-[#111111] delay-300' style={{ transform: `translateY(${isAnimationActive ? '0' : '-100%' })` }} />
      <div className='h-full ease duration-700 w-1/4 bg-[#111111] delay-500' style={{ transform: `translateY(${isAnimationActive ? '0' : '100%' })` }} />
      <div className='h-full ease duration-700 w-1/4 bg-[#111111] delay-200' style={{ transform: `translateY(${isAnimationActive ? '0' : '-100%' })` }} />
    </section>
  )
}

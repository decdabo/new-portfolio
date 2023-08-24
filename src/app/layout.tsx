'use client'
import { useState } from 'react';
import { Header } from '@/components/commons/Header'
import './globals.css'
import { BackgroundAnimated } from '@/components/commons/BackgroundAnimated'
import { TransitionComponent } from '@/components/commons/TransitionComponent'
import { RouterProvider } from '@/context/RouterContext'
import { RouterTypesActions } from '@/context/types/routes'
import { Footer } from '@/components/commons/Footer';

interface AnimationState {
  path: RouterTypesActions;
  animation: boolean;
}

const initialState: AnimationState = {
  path: RouterTypesActions.HOME_ACTION,
  animation: false
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [ animationState, setAnimationState ] = useState(initialState);
  return (
    <html lang="en">
      <body>
      <RouterProvider>
        <Header setAnimationState={setAnimationState} />
        {children}
        <TransitionComponent animationState={animationState} setAnimationState={setAnimationState} />
        <BackgroundAnimated />
        <Footer />
      </RouterProvider>
      </body>
    </html>
  )
}

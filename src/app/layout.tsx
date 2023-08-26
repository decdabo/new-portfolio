'use client'
import { useState } from 'react';
import { Head } from 'next/document';
import { Header } from '@/components/commons/Header'
import './globals.css'
import { BackgroundAnimated } from '@/components/commons/BackgroundAnimated'
import { TransitionComponent } from '@/components/commons/TransitionComponent'
import { RouterProvider } from '@/context/RouterContext'
import { RoutesTypes } from '@/context/types/routes'
import { Footer } from '@/components/commons/Footer';
import { MouseFollower } from '@/components/commons/MouseFollower';

interface AnimationState {
  path: RoutesTypes;
  animation: boolean;
}

const initialState: AnimationState = {
  path: RoutesTypes.HOME_PAGE,
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
      <head>
        <meta name="description" content="David Caro's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>D.C. Portfolio</title>
      </head>
      <body>
      <RouterProvider>
        <Header setAnimationState={setAnimationState} />
        {children}
        <MouseFollower />
        <TransitionComponent animationState={animationState} setAnimationState={setAnimationState} />
        <BackgroundAnimated />
        <Footer />
      </RouterProvider>
      </body>
    </html>
  )
}

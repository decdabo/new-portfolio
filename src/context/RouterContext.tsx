'use client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { RoutesTypes } from './types/routes';

const RouterContext = createContext({});

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [ path, setPath ] = useState<RoutesTypes>(RoutesTypes.HOME_PAGE)

  return <RouterContext.Provider value={{ path, setPath }}>{ children }</RouterContext.Provider>
}

export const useContextRouter = () => useContext(RouterContext);

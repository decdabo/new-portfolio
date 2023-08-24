'use client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { RouterTypesActions } from './types/routes';

const RouterContext = createContext({});

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [ path, setPath ] = useState<RouterTypesActions>(RouterTypesActions.HOME_ACTION)

  return <RouterContext.Provider value={{ path, setPath }}>{ children }</RouterContext.Provider>
}

export const useContextRouter = () => useContext(RouterContext);

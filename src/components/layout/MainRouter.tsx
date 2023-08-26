import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useContextRouter } from '@/context/RouterContext';
import { RoutesTypes } from '@/context/types/routes';
import { Home } from '../home/Home';
import { Resume } from '../resume/Resume';

export const MainRouter = () => {
  const { path, setPath } :any = useContextRouter();
  const pathname = usePathname();

  const handleRoute = () => {
    switch (pathname) {
      case RoutesTypes.DEFAULT_PAGE:
        return setPath(RoutesTypes.HOME_PAGE);
      case RoutesTypes.HOME_PAGE:
        return setPath(RoutesTypes.HOME_PAGE);
      case RoutesTypes.RESUME_PAGE:
        return setPath(RoutesTypes.RESUME_PAGE);
      case RoutesTypes.PORTFOLIO_PAGE:
        return setPath(RoutesTypes.PORTFOLIO_PAGE);
      case RoutesTypes.CONTACT_PAGE:
        return setPath(RoutesTypes.CONTACT_PAGE);
      default:
        return setPath(RoutesTypes.NOT_FOUND_PAGE);
    }
  }

  useEffect(() => {
    handleRoute();
  }, [])

  return (
    <>
      { path === RoutesTypes.HOME_PAGE && <Home /> }
      { path === RoutesTypes.RESUME_PAGE && <Resume /> }
      { path === RoutesTypes.PORTFOLIO_PAGE && <>asd</> }
    </>
  )
}

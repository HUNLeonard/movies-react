import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const routes = [
  {
    name: 'Home',
    pathname: "/",
  },
  {
    name: 'Movies',
    pathname: "/movie",
    search: "",
  },
  {
    name: 'About',
    pathname: "/about",
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function checkClosure() {
      if (window.innerWidth > 480) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', checkClosure)

    return () => window.removeEventListener('resize', checkClosure);
  }, [])


  return (
    <nav className='relative flex flex-row flex-nowrap justify-between items-center h-full text-secondary-200 max-w-[90rem] mx-auto px-2 md:px-4 '>
      <Link to="/" className='font-extrabold text-3xl active:scale-105 hover:scale-105 active:translate-x-[2.5%] hover:translate-x-[2.5%] transition-[transform_0.5s] drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]'>Movies</Link>

      {/*Desktop*/}
      <DesktopNav />

      {/*Mobil*/}
      <MobilNavbar setIsOpen={setIsOpen} isOpen={isOpen} />

    </nav>
  )
}

const MobilNavbar = ({ setIsOpen, isOpen }: { setIsOpen: (p: any) => void, isOpen: boolean }) => {
  return (<div onTouchStart={() => setIsOpen((p: any) => !p)} onMouseLeave={() => setIsOpen(false)} onMouseEnter={() => setIsOpen(true)} className={`
      relative z-50 xs:hidden flex w-8 h-8 items-center group cursor-pointer
          after:absolute after:h-1 after:w-full after:top-1 after:bg-white after:transition-transform after:duration-500 ${isOpen && 'after:translate-y-2.5 after:rotate-45 before:-translate-y-2.5 before:-rotate-45'}
          before:absolute before:h-1 before:w-full before:bottom-1 before:bg-white before:transition-transform before:duration-500
      `}>
    <p className={`z-50 w-full h-1 bg-white [transition:translate_0.5s,opacity_0.5s] ${isOpen && '-translate-x-1/1 opacity-0 '}`}>
    </p>

    {<div className={`absolute top-8 -right-2 -z-50 pt-4 w-36 flex flex-col text-center *:last-of-type:rounded-b-md cursor-default  rounded-b-md overflow-hidden [transition:max-height_0.5s] ${isOpen ? 'max-h-40 bg-primary' : 'max-h-0'}`}>
      {routes.map(route => <NavLink key={route.name} to={route.pathname + (route.search ?? '')}
        className={({ isActive }) => `${isActive ? 'text-black hover:text-black-100 active:text-black-100 bg-secondary-200 hover:bg-secondary-100 active:bg-secondary-100' : ' hover:text-secondary active:text-secondary bg-primary hover:bg-primary-100 active:bg-primary-100'}
              font-medium active:font-semibold hover:font-semibold cursor-pointer text-xl p-2`}>
        {route.name}
      </NavLink>)}
    </div>}
  </div>);
}

const DesktopNav = () => {
  return (<div className='hidden xs:grid grid-cols-3 gap-2 text-center w-60'>
    {routes.map(route =>
      <NavLink end key={route.name} to={route.pathname + (route.search ?? '')}
        className={({ isActive }) => `${isActive ? 'text-black hover:text-black-100 active:text-black-100' : ' hover:text-secondary active:text-secondary'}
        font-medium active:font-semibold hover:font-semibold transition-[font-weight] duration-100 cursor-pointer text-xl drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]`}>
        {route.name}
      </NavLink >)
    }
  </div>);
}

export default Navbar
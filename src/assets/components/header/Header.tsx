import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuMobile from "../menuMobile/Menu";

import logo from '../../images/logoZoomies.webp'

export default function Header(){
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) {
            setIsSticky(true);
            document.querySelector('header')?.classList.add('headerSticky')
        } else {
            setIsSticky(false);
            document.querySelector('header')?.classList.remove('headerSticky')
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]);
    return (
        <header className="fixed bottom-0 lg:top-0 left-0 right-0 z-50  text-black backdrop-blur-md menuNavigation">
          <div className="w-full container mx-auto lg:min-h-[104px] p-0 lg:px-5 lg:py-5 flex items-center justify-between">
            <Link to="/" id='logoImg' className='hidden lg:block lg:ml-[120px]'>
              <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
            </Link>
            
            <nav className="w-full max-w-[700px] hidden md:flex justify-around">
              <NavLink  to="/" className='text-2xl font-bold hover:text-[#808080] transition-all' >Home</NavLink >
              <NavLink  to="/sobre" className='text-2xl font-bold hover:text-[#808080] transition-all' >Sobre</NavLink >
              <NavLink  to="/produtos" className='text-2xl font-bold hover:text-[#808080] transition-all' >Produtos</NavLink >
            </nav>

            
          </div>
          <nav className="w-full px-2 lg:px-5 py-5  block md:hidden text-white bg-[#0000009d] ">
            <MenuMobile />
          </nav>
        </header>
    )
}
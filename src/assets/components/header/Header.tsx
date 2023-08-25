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
        <header className="fixed top-0 z-50 w-full min-h-[104px] px-5 py-5 flex items-center justify-between text-black backdrop-blur-md menuNavigation">
          <Link to="/" id='logoImg' className='md:ml-[120px]'>
            <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
          </Link>
          
          <nav className="w-full max-w-[700px] hidden md:flex justify-around">
            <NavLink  to="/" className='text-2xl font-bold hover:text-[#808080] transition-all' >Home</NavLink >
            <NavLink  to="/sobre" className='text-2xl font-bold hover:text-[#808080] transition-all' >Sobre</NavLink >
            <NavLink  to="/produtos" className='text-2xl font-bold hover:text-[#808080] transition-all' >Produtos</NavLink >
          </nav>

          <nav className="h-full md:hidden right-0">
            <MenuMobile />
          </nav>
          
        </header>
    )
}
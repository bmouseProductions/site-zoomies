import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { faHome, faNewspaper, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <>
        <header className="hidden md:block fixed top-0 left-0 right-0 z-50 text-white backdrop-blur-md menuNavigation">
          <div className="w-full container mx-auto md:min-h-[100px] p-0 md:px-5 md:py-5 flex items-center justify-between">
            <Link to="/" id='logoImg' className='hidden md:block '>
              <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
            </Link>
            
            <nav className="w-full max-w-[700px] hidden md:flex justify-around">
              <NavLink  to="/" className='text-2xl font-bold hover:text-[#808080] transition-all' >Home</NavLink >
              <NavLink  to="/sobre" className='text-2xl font-bold hover:text-[#808080] transition-all' >Sobre</NavLink >
              <NavLink  to="/produtos" className='text-2xl font-bold hover:text-[#808080] transition-all' >Produtos</NavLink >
              <NavLink  to="/blog" className='text-2xl font-bold hover:text-[#808080] transition-all' >Blog</NavLink >
            </nav>
          </div>
        </header>

        <header className="md:hidden fixed bottom-0 left-0 right-0 z-50 menuNavigation">
          <nav className=" md:hidden w-full py-5 px-2 flex justify-around text-white bg-[#0000009d] ">

            <NavLink  to="/" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faHome} />
              Home
            </NavLink >
            <NavLink  to="/sobre" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faHome} />
              Sobre
            </NavLink >
            <NavLink  to="/produtos" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faHome} />
              Produtos
            </NavLink >
            <NavLink  to="/blog" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faNewspaper} />
              Blog
            </NavLink >
          </nav>
        </header>
      </>
    )
}
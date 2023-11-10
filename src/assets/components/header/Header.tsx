import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { faHome, faNewspaper, faBuilding, faPaw, faHandshake } from '@fortawesome/free-solid-svg-icons';
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
        <header className="hidden md:block fixed top-0 left-0 right-0 z-50 text-black md:text-white backdrop-blur-md menuNavigation">
          <div className="w-full container mx-auto md:min-h-[100px] p-0 md:px-5 md:py-5 flex items-center justify-between">
            <Link to="/" id='logoImg' className='hidden md:block md:mr-[20px] lg:ml-[120px]'>
              <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
            </Link>
            
            <nav className="w-full max-w-[800px]  md:flex justify-around">
              <NavLink  to="/" className='text-2xl font-medium hover:text-[#808080] transition-all' >Home</NavLink >
              <NavLink  to="/sobre" className='text-2xl font-medium hover:text-[#808080] transition-all' >Sobre</NavLink >
              <NavLink  to="/produtos" className='text-2xl font-medium hover:text-[#808080] transition-all' >Produtos</NavLink >
              <NavLink  to="https://lojazoomies.com/revendedor/" className='text-2xl font-medium hover:text-[#808080] transition-all' >Revendador</NavLink >
              <NavLink  to="https://lojazoomies.com/zoom/" className='text-2xl font-medium hover:text-[#808080] transition-all' >Blog</NavLink >
            </nav>
          </div>
        </header>

        <header className="md:hidden fixed bottom-0 left-0 right-0 z-50 menuNavigation">
          <nav className=" md:hidden w-full py-5 px-2 flex justify-around text-black bg-[#fff] menhu">

            <NavLink  to="/" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faHome} className="text-black text-lg" />
              Home
            </NavLink >
            <NavLink  to="/sobre" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faBuilding} className="text-black text-lg" />
              Sobre
            </NavLink >
            <NavLink  to="/produtos" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faPaw} className="text-black text-lg" />
              Produtos
            </NavLink >
            <NavLink  to="https://lojazoomies.com/revendedor/" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faHandshake} className="text-black text-lg " />
              Revendedor
            </NavLink >
            <NavLink  to="https://lojazoomies.com/zoom/" className="flex flex-col items-center" >
              <FontAwesomeIcon icon={faNewspaper} className="text-black text-lg " />
              Blog
            </NavLink >
          </nav>
        </header>
      </>
    )
}
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Collapse,
  Card,
  CardBody,
} from "@material-tailwind/react";

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

    /*COLLAPSE MENU MOBILE*/
    
    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => setOpen((cur) => !cur);

    const [open2, setOpen2] = useState(false);
    const handleMouseEnter = () => {
      setOpen2(true);
    };
  
    const handleMouseLeave = () => {
      setOpen2(false);
    };
    
    return (
      <>
        <header
          onMouseLeave={handleMouseLeave}
          className="hidden lg:block fixed top-0 left-0 right-0 z-50 text-black md:text-white backdrop-blur-md menuNavigation"
        >
          <div className="w-full container mx-auto md:min-h-[100px] p-0 md:px-5 md:py-5 flex items-center justify-between">
            <Link to="/" id='logoImg' className='hidden md:block md:mr-[20px] lg:ml-[70px] lg:mr-[50px]'>
              <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
            </Link>
            
            <nav className="w-full max-w-[630px] xl:max-w-[700px] 2xl:max-w-[800px]  md:flex justify-around">
              <NavLink  to="/" className='text-2xl font-medium hover:text-[#808080] transition-all' >Home</NavLink >
              <NavLink  to="/sobre" className='text-2xl font-medium hover:text-[#808080] transition-all' >Sobre</NavLink >
              <a 
                onMouseEnter={handleMouseEnter}
                className='text-2xl font-medium hover:text-[#808080] transition-all' 
              >
                Produtos
              </a >
              <NavLink  to="https://lojazoomies.com/revendedor/" target="_blank" className='text-2xl font-medium hover:text-[#808080] transition-all' >Revendedor</NavLink >
              <NavLink  to="https://lojazoomies.com/zoom/" target="_blank" className='text-2xl font-medium hover:text-[#808080] transition-all' >Blog</NavLink >
            </nav>
          </div>
            <Collapse open={open2}>
                <Card className={ open2 ? "lg:ml-[55%] xl:ml-[60%] 2xl:ml-[64%] w-[200px] bg-blue-600 rounded": 'hidden'}>
                  <CardBody>
                    <NavLink  to="/produtos/catalogo" className="py-1 flex flex-col items-center text-sm md:text-xl " >
                      Catálogo
                    </NavLink >
                    <hr />
                    <NavLink  to="/produtos/onde-encontrar" className="py-1 flex flex-col items-center text-sm md:text-xl " >
                      Onde encontrar
                    </NavLink >
                  </CardBody>
                </Card>
            </Collapse>
        </header>
        
        {/* NAVBAR MOBILE */}
        <header className="flex flex-col gap-3 lg:hidden fixed bottom-0 left-0 right-0 z-50 menuNavigation">

          <Collapse  open={open}>
            <Card className={ open ? " mx-auto w-6/12 bg-blue-600 rounded": 'hidden'}>
              <CardBody>
                <NavLink  to="/produtos" className="py-1 flex flex-col items-center text-sm md:text-xl " onClick={toggleOpen}>
                  Produtos
                </NavLink >
                <hr />
                <NavLink  to="/produtos" className="py-1 flex flex-col items-center text-sm md:text-xl " onClick={toggleOpen}>
                  Onde encontrar
                </NavLink >
              </CardBody>
            </Card>
          </Collapse>

          <nav className=" lg:hidden w-full  py-5 px-2 flex justify-around text-black bg-[#fff] menhu">

            <NavLink  to="/" className="flex flex-col items-center text-sm md:text-xl" >
              <FontAwesomeIcon icon={faHome} className="text-black text-lg" />
              Home
            </NavLink >
            <NavLink  to="/sobre" className="flex flex-col items-center text-sm md:text-xl" >
              <FontAwesomeIcon icon={faBuilding} className="text-black text-lg" />
              Sobre
            </NavLink >
            <a  onClick={toggleOpen} className="flex flex-col items-center text-sm md:text-xl" >
              <FontAwesomeIcon icon={faPaw} className="text-black text-lg" />
              Produtos
            </a >
            <NavLink  to="https://lojazoomies.com/revendedor/" className="flex flex-col items-center text-sm md:text-xl" >
              <FontAwesomeIcon icon={faHandshake} className="text-black text-lg " />
              Revendedor
            </NavLink >
            <NavLink  to="https://lojazoomies.com/zoom/" className="flex flex-col items-center text-sm md:text-xl" >
              <FontAwesomeIcon icon={faNewspaper} className="text-black text-lg " />
              Blog
            </NavLink >
          </nav>
        </header>
      </>
    )
}
import React, { useEffect, useState } from "react";
import logo from '../../images/logoZoomies.webp'
import {
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  CardBody,
  Collapse,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon, MapIcon} from "@heroicons/react/24/solid";
import { faBuilding, faCartShopping, faHandshake, faHome, faNewspaper, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

{/* COLLAPSE MENU HOVER */}
const navListMenuItems = [
  {
    title: "Produtos",
    description: "Veja todo os produtos",
    icon: ShoppingBagIcon,
    link: '/produtos'
  },
  {
    title: "Onde comprar",
    description: "Encontre o ponto de venda mais próximo de você",
    icon: MapIcon,
    link: '/onde-encontrar'
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
        <NavLink to={link} key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-gray-300">
              <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                {" "}
                {React.createElement(icon, {
                    strokeWidth: 2,
                    className: "h-6 text-gray-900 w-6",
                })}
              </div>
              <div>
                <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold"
                >
                    {title}
                </Typography>
                <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                >
                    {description}
                </Typography>
              </div>
            </MenuItem>
        </NavLink>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="text-2xl font-medium hover:text-[#808080] transition-all flex gap-1 items-center justify-center"
              selected={isMenuOpen}
            >
              Produtos
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block mt-5">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

{/* NAVBAR */}
function NavList() {
  return (
    <nav className="w-full max-w-[630px] flex justify-around gap-10">
        <NavLink  to="/" className='text-2xl font-medium hover:text-[#808080] transition-all' >Home</NavLink >
        <NavLink  to="/sobre" className='text-2xl font-medium hover:text-[#808080] transition-all' >Sobre</NavLink >
        <NavListMenu />
        <NavLink  to="https://lojazoomies.com/revendedor/" target="_blank" className='text-2xl font-medium hover:text-[#808080] transition-all' >Revendedor</NavLink >
        <NavLink  to="https://lojazoomies.com/zoom/" target="_blank" className='text-2xl font-medium hover:text-[#808080] transition-all' >Blog</NavLink >
    </nav>
  );
}



{/* HEADER */}
export function MegaMenuWithHover() {
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
 
    return (
        <>
            <header className="hidden lg:block !w-full fixed top-0 left-0 right-0 z-50 text-black md:text-white backdrop-blur-md menuNavigation">
                <div className="max-w-[1276px] mx-auto px-5 md:min-h-[100px]  flex items-center justify-between">
                    <Link to="/" id='logoImg' className='hidden md:block '>
                        <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
                    </Link>
                    <div className="hidden lg:block">
                    <NavList />
                    </div>
                    <a 
                      href="https://lojazoomies.com/view" 
                      target="_blank"
                      className="flex justify-center items-center gap-3 py-2 px-3 text-xl font-semibold bg-white rounded-lg text-black "
                    >
                        <FontAwesomeIcon icon={faCartShopping} className="text-black text-lg" />
                        Comprar
                    </a>
                </div>
            </header>


            {/* NAVBAR MOBILE */}
            <header className="flex flex-col gap-3 lg:hidden fixed bottom-0 left-0 right-0 z-50 menuNavigation text-white">
                <Collapse  open={open}>
                    <Card className={ open ? " mx-auto w-6/12 bg-blue-600 rounded": 'hidden'}>
                        <CardBody>
                        <NavLink  to="/produtos" className="py-1 flex flex-col items-center text-sm md:text-xl " onClick={toggleOpen}>
                            Produtos
                        </NavLink >
                        <hr />
                        <NavLink  to="/onde-encontrar" className="py-1 flex flex-col items-center text-sm md:text-xl " onClick={toggleOpen}>
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
    );
}
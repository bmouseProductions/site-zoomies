import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';

import ClearIcon from '@mui/icons-material/Clear';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';

import logo from '../../images/logoZoomies.webp'

/*CONFIG MENU MOBILE*/
const drawerWidthIcon = 65
const drawerWidth =  window.screen.width;
const drawerHeigth =  window.screen.height;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

/*ITENS MENU*/ 
const itemsMenu = [
    {
      itemList: 'Home',
      icon: <HomeIcon className='!text-4xl' />,
      route: '/'
    },

    {
        itemList: 'Sobre',
        icon: <ApartmentIcon className='!text-4xl'  />,
        route: '/sobre'
    },

    {
        itemList: 'Produtos',
        icon: <ApartmentIcon className='!text-4xl'  />,
        route: '/produtos'
    },
  ]

export default function MenuMobile() {
    const [open, setOpen] = React.useState(false);

    const logoHeader = document.querySelector('#logoImg')

    const handleDrawerOpen = () => {
        setOpen(true);
        logoHeader!.classList.add('hiddenLogo')
    };

    const handleDrawerClose = () => {
        setOpen(false);
        logoHeader!.classList.remove('hiddenLogo')
    };

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }) }}
                
            >
                <MenuIcon className='!text-5xl'/>
            </IconButton>
        
            <Drawer
                sx={{
                width: drawerWidthIcon,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    height: drawerHeigth,
                    backgroundColor: '#fffff',
                    backdropFilter: 'blur(50px)',
                },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader className='!px-5 !py-5 flex !justify-between min-h-[104px]  mb-2 '>
                    <Link to='/' onClick={handleDrawerClose}>
                        <img src={logo} className="max-w-[200px] h-[50px] md:max-w-xs " alt="" />
                    </Link>
                    
                    <IconButton onClick={handleDrawerClose}>
                        <ClearIcon className='!text-4xl !text-red-600' />
                    </IconButton>
                </DrawerHeader>

                
                <List className='flex flex-col gap-5'>
                    {itemsMenu.map((item) => (
                        <ListItem key={item.itemList} disablePadding>
                            <NavLink to={item.route} onClick={handleDrawerClose} className='flex items-center gap-5 text-black text-3xl'>
                                {item.icon}
                                {item.itemList}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

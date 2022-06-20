//import CSS
import './NavBar.css';

//import componente: CartWidget en NavBar
import CartWidget from '../CartWidget/CartWidget';

import ThemeSwitch from './ThemeSwitch';

//import mui styles
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//import react-router-dom
import { Link } from 'react-router-dom';

//import react
import { useState } from 'react';
import * as React from 'react';

//hook para utilizar la informacion que tenemos en el context 
import { useContext } from 'react';

//el ThemeContext me permite acceder a la info que paso por value al provider
import { ThemeContext } from '../../context/ThemeContext';


const NavBar = () => {
    //genero una constante y le paso el context desde el que traigo la info
    const { darkTheme } = useContext(ThemeContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = ["KOKEDAMAS", "CACTUS"];    
    return (
        //retorna un JSX (HTML)
        <AppBar position="fixed" className={`header-success ${darkTheme === true ? 'dark-mode' : 'light-mode'} `}>
            <Toolbar className='toolbar-nav'>
                <div className='container-logo'>
                    <Link to={'/'}>
                        <img src='/ticsi-logo.png' alt='imagen-logo'></img>
                    </Link>
                </div>
                <ul className='navbar-list'>
                    <li>
                        <Button variant='text' color='inherit'>
                            <Link to='/' className='link-menu'>INICIO</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            PRODUCTOS
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {categories.map((cat) => {
                                return(<MenuItem onClick={handleClose}><Link to={`/items/${cat}`}>{cat}</Link></MenuItem>) 
                            })}
                        </Menu>
                    </li>
                    <li>
                        <Button variant='text' color='inherit'>
                            <Link to='/contact' className='link-menu'>CONTACTO</Link>  
                        </Button>
                    </li>
                    <li>
                        <Button variant='text' color='inherit'>
                            CUIDADOS Y TIPS  
                        </Button>
                    </li>
                </ul>
            <Button color="inherit">BUSCAR</Button>
            <ThemeSwitch></ThemeSwitch>
            <CartWidget></CartWidget>
            </Toolbar>  
        </AppBar>

    )
}

//exporto el componente a App.js - solo puede haber un "export default" por archivo
export default NavBar

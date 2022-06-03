//import CSS
import './NavBar.css';

//import CartWidget en NavBar
import CartWidget from '../CartWidget/CartWidget';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';



//Upper CamelCase: se utiliza para componentes (eso lo hace diferente a un tag de HTML)
const NavBar = () => {
    //para ser un componente la funcion tiene que retornar algo
    return (
        //retorna un JSX (HTML)
        //etiqueta fragment para englobar todo en un elemento - si tengo que agregarle clases es todo dentro del fragment con className
        <> 
            <AppBar position="static">
                <Toolbar className='toolbar-nav'>
                    <div className='container-logo'>
                            <Link to={'/'}>
                                <img src='./ticsi-logo.png' alt='imagen-logo'></img>
                            </Link>
                    </div>
                    <ul className='navbar-list'>
                        <li>
                            <Button variant='text' color='inherit'>
                                <Link to='/'>INICIO</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' color='inherit'>
                                <Link to='/products'>PRODUCTOS</Link>  
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' color='inherit'>
                                <Link to='/contact'>CONTACTO</Link>  
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' color='inherit'>
                                CUIDADOS Y TIPS  
                            </Button>
                        </li>
                    </ul>
                <Button color="inherit">BUSCAR</Button>
                <CartWidget></CartWidget>
                </Toolbar>
            </AppBar>
        </>

    )
}



//exporto el componente a App.js - solo puede haber un "export default" por archivo
export default NavBar

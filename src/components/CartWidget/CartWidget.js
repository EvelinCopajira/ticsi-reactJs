//import CSS
import './CartWidget.css';

import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//import icono carrito
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';


const CartWidget = () => {  

    const {cartListItems} = useContext(CartContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='cart-container'>
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >

                <div className='container-cart'>
                    {cartListItems.map((item) => {
                        return(
                            <>
                            <div className='container-cart-list' key={item.id}>
                                <div>
                                    <img src={`/${item.image}`} alt='imagen-producto' />
                                </div>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>

                            <button className='btn-delete-item'>
                                <DeleteIcon/>
                            </button>
                            </div>
                            </>
                        )
                    })}
                </div>
            </Menu>
        </div>
    )        
    
}

export default CartWidget
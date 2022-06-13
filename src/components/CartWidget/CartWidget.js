//import CSS
import './CartWidget.css';

//import react
import { useState } from 'react';
import { useContext } from 'react';
import * as React from 'react';

//import context
import { CartContext } from '../../context/CartContext';

//import mui styles
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
},
}));

const CartWidget = () => {  
    //traigo fn que quiero usar y le asocio el contexto donde estan
    const {cartListItems, removeProduct, clearCart} = useContext(CartContext);

    //const para traer la cantidad de productos en el carrito
    const {getAmountOfProducts} = useContext(CartContext);
    const amountOfProducts = getAmountOfProducts();

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
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={amountOfProducts} color='primary'>
                <ShoppingCartIcon 
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
                </StyledBadge>
            </IconButton>

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
                    {cartListItems.map((cartItem) => {
                        const item = cartItem.productData
                        return(
                            <>
                            <div className='container-cart-list' key={item.id}>
                                <div>
                                    <img src={`/${item.image}`} alt='imagen-producto' />
                                </div>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>
                                <p>CANTIDAD: {cartItem.quantity}</p>
                            <button className='btn-delete-item' >
                                <DeleteIcon onClick={() => removeProduct(item.id)}/>
                            </button>
                            </div>
                            </>
                        )
                    })}
                    <button onClick={() => clearCart()}>
                        VACIAR CARRITO
                    </button>
                </div>
            </Menu>
        </div>
    )    
}

export default CartWidget
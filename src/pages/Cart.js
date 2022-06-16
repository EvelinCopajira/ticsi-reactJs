import {Container} from '@mui/material'

import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const {cartListItems, removeProduct, totalCartPrice} = useContext(CartContext);
    return(
        <Container className='checkout-container '>
            <h2>CARRITO DE COMPRAS - CHECKOUT</h2>
            <div className="cart-table-header">
                TITULOS
            </div>
            {cartListItems.map((item) => {
                //const item = cartItem.productData
                return(
                    <div className="cart-table-content" key={item.id}>
                        <div>
                            <img src={`/${item.image}`} alt='imagen-producto' />
                        </div>
                        <p>{item.title}</p>
                        <span>PRECIO: ${item.price}</span>
                        <p>CANTIDAD:{item.quantity}</p>
                        <p>SUTOTAL: ${item.price*item.quantity}</p>
                        <button className='btn-delete-item' >
                            <DeleteIcon onClick={() => removeProduct(item.id)}/>
                        </button>
                    </div>
                )
            })}
            <div className="cart-footer">
                <p className="total-cart-price">Total: ${totalCartPrice()}</p>
            </div>
        </Container>
    )
}

export default Cart;
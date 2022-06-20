import {Container} from '@mui/material'

import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Cart = () => {
    const {cartListItems, removeProduct, totalCartPrice} = useContext(CartContext);
    return(
        <Container className='checkout-container '>
            <h2>CARRITO DE COMPRAS - CHECKOUT</h2>
            {cartListItems.length === 0 ? (
                <>
                <h3>El carrito está vacío</h3>
                <Button variant='outlined' >
                    <Link to={'/products'} className='btn-back-products'>Empezá a comprar</Link>
                </Button>
                </>
            ) : (
                <>
                <div className="cart-table-header">
                    TITULOS
                </div>
                {cartListItems.map((item) => {
                    return(
                        <div className="cart-table-content" key={item.id}>
                            <div>
                                <img src={`/${item.image}`} alt='imagen-producto' />
                            </div>
                            <p>{item.title}</p>
                            <p>CANTIDAD:{item.quantity}</p>
                            <span>PRECIO: ${item.price}</span>
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
                </>
            )}
            

            
        </Container>
    )
}

export default Cart;
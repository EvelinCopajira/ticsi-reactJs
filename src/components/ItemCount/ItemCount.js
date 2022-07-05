//import CSS
import './ItemCount.css';

//import mui styles
import { Button } from '@mui/material';

//import context
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//contador, valida con el stock y actualiza con botones +/-. Recibe por props la cantidad y actualización de cantidad desde ItemDetail
const ItemCount = ({product, quantity, refreshQuantity, setShowButton}) => {

       //traigo el contexto
       const {addProductToCart, cartListItems} = useContext(CartContext);

    const stock = product.stock;
    const productInCart = cartListItems.find(cartItem => cartItem.id === product.id)
    const totalQuantity = (productInCart === undefined ? 0 : productInCart.quantity) + quantity;

    //fn para darle funcionalidad al +/- del count
    const addCount = () => {
        refreshQuantity(quantity + 1)
    };    
    const removeCount = () => {
        refreshQuantity(quantity - 1)
    };

    const showButton = () => {
        return setShowButton(true)
    };
    const addProduct = () => {
        console.log(quantity)
        return addProductToCart(product, quantity)
    } 

    //unifico las funciones para que el btn AGREGAR AL CARRITO ejecute en el onClick ambas
    const handleOnClick = () => {
        showButton()
        addProduct()
    }

    
    
    return (
        <>
        <div className='count-item'>
            <Button onClick={removeCount} disabled = {quantity === 1}>-</Button>
            <p>{quantity}</p>
            <Button onClick={addCount} disabled = {totalQuantity >= stock}>+</Button>
        </div>
        <Button className='btn' onClick={handleOnClick}>
            AGREGAR AL CARRITO
        </Button>
        </>
    )
}

export default ItemCount;
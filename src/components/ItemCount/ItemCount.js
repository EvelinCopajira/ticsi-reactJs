//import CSS
import './ItemCount.css';

import { Button } from '@mui/material';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//contador, valida con el stock de la API y actualiza con botones +/-. Recibe por props la cantidad y actualización de cantidad desde ItemDetal
const ItemCount = ({product, quantity, actualizarCantidad, setShowButton}) => {

    const stock = product.stock;
    
    //fn para darle funcionalidad al +/- del count
    const addCount = () => {
        actualizarCantidad(quantity + 1)
    };    
    const removeCount = () => {
        actualizarCantidad(quantity - 1)
    };

    const {addProductToCart} = useContext(CartContext);

    const showButton = () => {
        return setShowButton(true)
    }

    const addProduct = () => {
        return addProductToCart(product)
    } 

    //unifico las funciones para que el btn COMPRAR ejecute en el onClick ambas
    const handleOnClick = () => {
        showButton()
        addProduct()
    }
    
    //a traves de onClick le paso info al padre, que es ItemDetail, para que obtenga la cantidad y actualice setQuantity
    return (
        <>
        <div className='count-item'>
            <Button onClick={removeCount} disabled = {quantity === 0}>-</Button>
            <p>{quantity}</p>
            <Button onClick={addCount} disabled = {quantity >= stock}>+</Button>
        </div>
        <Button variant='outlined' onClick={handleOnClick}>
            COMPRAR
        </Button>


        </>
    )

}

export default ItemCount;
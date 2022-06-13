//import CSS
import './ItemCount.css';

//import mui styles
import { Button } from '@mui/material';

//import context
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//contador, valida con el stock de la API y actualiza con botones +/-. Recibe por props la cantidad y actualización de cantidad desde ItemDetail
const ItemCount = ({product, quantity, refreshQuantity, setShowButton}) => {
    const stock = product.stock;

    //traigo el contexto
    const {addProductToCart} = useContext(CartContext);

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
            <Button onClick={removeCount} disabled = {quantity === 0}>-</Button>
            <p>{quantity}</p>
            <Button onClick={addCount} disabled = {quantity >= stock}>+</Button>
        </div>
        <Button variant='outlined' onClick={handleOnClick}>
            AGREGAR AL CARRITO
        </Button>
        </>
    )
}

export default ItemCount;
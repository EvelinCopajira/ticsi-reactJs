//import CSS
import './ItemCount.css';

import { Button } from '@mui/material';

//contador, valida con el stock de la API y actualiza con botones +/-. Recibe por props la cantidad y actualización de cantidad desde ItemDetal
const ItemCount = ({stock, quantity, actualizarCantidad, setShowButton}) => {
    
    const addCount = () => {
        actualizarCantidad(quantity + 1)
    };
    
    const removeCount = () => {
        actualizarCantidad(quantity - 1)
    };
    
    //a traves de onClick le paso info al padre que es ItemDetail para que obtenga la cantidad y actualice setQuantity
    return (
        <>
        <div className='count-item'>
            <Button onClick={removeCount} disabled = {quantity === 0}>-</Button>
            <p>{quantity}</p>
            <Button onClick={addCount} disabled = {quantity >= stock}>+</Button>
        </div>
        <Button variant='outlined' onClick={() => setShowButton(true)}>
            AGREGAR AL CARRITO
        </Button>

        </>
    )

}

export default ItemCount;
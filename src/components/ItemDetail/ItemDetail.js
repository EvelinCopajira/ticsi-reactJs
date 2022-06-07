//import CSS
import './ItemDetail.css'

//import ItemCount
import ItemCount from '../ItemCount/ItemCount';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

//recibe la prop 'product' del componente padre ItemDetailContainer
const ItemDetail = ({title, product}) => {

    const [quantity, setQuantity] = useState(1);
    //indica cuando se va a ver el btn "terminar compra". En false porque no quiero que se muestre hasta que se cumpla la condicion 
    const [showButton, setShowButton] = useState(false)
    
    return(
        <>
        <h2>{title}</h2>
        <div className='detail-container' key={product.id}>
            <div className='img-detail-container'>
                <img src={`/${product.image}`} alt='imagen-detalle'></img>
            </div>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                {showButton == false ?
                <ItemCount stock={product.stock} 
                    quantity={quantity}
                    setShowButton={setShowButton}
                    actualizarCantidad={setQuantity}> 
                </ItemCount>
                :
                <Button variant='outlined'>
                    <Link to={'/cart'}>TERMINAR COMPRA</Link>                    
                </Button>}

                <Button variant='outlined'>
                    <Link to={'/products'}>VOLVER A PRODUCTOS</Link>
                </Button>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
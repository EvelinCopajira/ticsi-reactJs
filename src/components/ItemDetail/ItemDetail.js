//import CSS
import './ItemDetail.css'

//import component: ItemCount
import ItemCount from '../ItemCount/ItemCount';

//import mui styles
import { Button } from '@mui/material';

//import react-router-dom
import { Link } from 'react-router-dom';

//import react
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
                <div className='data-detail-container'>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
                <p>{product.description}</p>
                {showButton === false ?
                <ItemCount product={product} 
                    quantity={quantity}
                    setShowButton={setShowButton}
                    refreshQuantity={setQuantity}>
                </ItemCount>                
                :                
                <Button className='btn'>
                    <Link to={'/cart'}>TERMINAR COMPRA</Link>                    
                </Button>}
                <Button className='btn'>
                    <Link to={'/products'}>VOLVER A PRODUCTOS</Link>
                </Button>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
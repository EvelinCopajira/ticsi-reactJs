//import CSS
import './ItemDetail.css'

//import ItemCount
import ItemCount from '../ItemCount/ItemCount';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

//recibe la prop 'product' del componente padre ItemDetailContainer
const ItemDetail = ({title, product}) => {
    
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
                <ItemCount stock={product.stock}></ItemCount>
                <Button>
                    <Link to={'/products'}>VOLVER A PRODUCTOS</Link>
                </Button>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
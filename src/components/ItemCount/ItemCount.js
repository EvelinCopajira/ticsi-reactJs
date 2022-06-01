//import CSS
import './ItemCount.css';

import { Button } from '@mui/material';
import {useState} from 'react';

//contador, toma stock de la API y onAdd que muestra en consola cuando doy click al boton
const ItemCount = ({stock, onAdd, product}) => {
    const [count, setCount] = useState (1); 
    
    const addCount = () => {
        setCount(count + 1)
    };
    
    const removeCount = () => {
        setCount(count - 1)
    };
    

    return (
        <>
        <div className='count-item'>
            <Button onClick={removeCount} disabled = {count === 0}>-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled = {count >= stock}>+</Button>
        </div>
        <div className='btn-card'>
            <Button variant='outlined' onClick={(() => onAdd (count))}>COMPRAR</Button>     
        </div>
        </>
    )

}

export default ItemCount;
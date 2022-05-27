//import CSS
import './ItemCount.css';

import { Button } from '@mui/material';
import {useState} from 'react';



const ItemCount = ({stock, onAdd}) => {
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
        <div>
            <Button className='btn-buy' variant='contained' onClick={(() => onAdd (count))}>COMPRAR</Button>
        </div>        
        </>
    )

}

export default ItemCount;
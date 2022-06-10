//Item.js - componente de presentacion
//import CSS
import './Item.css'

//import mui styles
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext';

//funcional component - estructura basica de un componente funcional    
const CardItem = ({image, price, title, stock, id}) => {

    const {darkTheme} = useContext(ThemeContext);
    const {addProductToCart} = useContext(CartContext)

    return (
        <Card sx={{ minWidth: 275 }} className={`card-item-container ${darkTheme === true ? 'dark-mode' : 'light-mode'} `}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`/${image}`} alt='imagen-producto' />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div className='btn-card'>
                        <Button>
                            <Link to={`/item/${id}`} className='btn-detail'>VER DETALLE</Link>  
                        </Button>
                        <Button className='btn-detail' onClick={()=> addProductToCart({image, price, title, stock, id})}>
                            AGREGAR AL CARRITO
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;
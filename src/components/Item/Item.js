//import CSS
import './Item.css'

//import mui styles
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

//import react-router-dom
import { Link } from 'react-router-dom';

//import react
import { useContext} from 'react';

//import context
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext';

const CardItem = ({image, price, title, stock, id}) => {
    //funciones que quiero importar y de qué contextos
    const {darkTheme} = useContext(ThemeContext);
    const {addProductToCart} = useContext(CartContext)

    //en el btn-agregar al carrito le paso por props "1" para que cada click implique que sume de 1 unidad
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
                        <Button className='btn-detail' onClick={()=> addProductToCart({image, price, title, stock, id}, 1)}>
                            AGREGAR AL CARRITO
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;
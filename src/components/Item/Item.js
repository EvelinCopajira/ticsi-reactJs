//Item.js - componente de presentacion
//import CSS
import './Item.css'

//import mui styles
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

//funcional component - estructura basica de un componente funcional    
const CardItem = ({image, price, title, stock, id}) => {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`/${image}`} alt='imagen-producto' />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div className='btn-card'>
                        <Button className='btn-detail' variant='outlined'>
                            <Link to={`/item/${id}`}>VER DETALLE</Link>  
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem;
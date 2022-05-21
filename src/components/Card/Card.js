//Card.js - componente de presentacion
//import CSS
import './Card.css'

//import mui styles
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';


//funcional component - estructura basica de un componente funcional    
const CardItem = ({image, price, title}) => {
    //desestructuracion
    //const {image, price, title} = props
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} alt='imagen-producto' />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant={'contained'}>DETALLE</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem
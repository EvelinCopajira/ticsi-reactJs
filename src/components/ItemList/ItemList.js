//CSS
import './ItemList.css'

//import CardItem
import CardItem from '../Item/Item';

import { Grid } from '@mui/material';

//.map para iterar sobre los productos en la API y asi obtener los productos del []
const ItemList = ({title, products}) => {
    return (
        <>
        <h2>{title}</h2>
        <Grid container spacing={3} className='grid-container'>
        {
            products.map(({title, price, image, id, stock}) => {
                return (
                    <Grid item sm={3} key={id} className='grid-card'>
                        <CardItem title={title} price={price} image={image} stock={stock}/>
                    </Grid>
                )
            })
        }
        </Grid>        
        </>
    )
}

export default ItemList;
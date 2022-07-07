//import CSS
import './ItemList.css'

//import component
import CardItem from '../Item/Item';

//import MUI
import { Grid } from '@mui/material';

//.map para iterar sobre los productos de firebase y asi obtener los productos del []
const ItemList = ({title, products}) => {
    return (
        <>
        <h1>{title}</h1>
        <Grid container spacing={3} className='grid-container'>
            {
                products.map(({title, price, image, id, stock}) => {
                    return (
                        <>
                        <Grid item sm={4} key={id} className='grid-card'>
                            <CardItem title={title} price={price} image={image} stock={stock} id={id}/>
                        </Grid>
                        </>
                    )
                })
            }
        </Grid>        
        </>
    )
}

export default ItemList;
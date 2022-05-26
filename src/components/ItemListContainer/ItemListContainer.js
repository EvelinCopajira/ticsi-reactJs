//ItemListContainer.js - componente contenedor (lista todas las cards que se muestran en pantalla)
//import CardItem
import CardItem from '../Item/Item';
import { Grid } from '@mui/material';

//le agreo una prop "title" para poder reutilizarlo y que cada vez que llame a un ItemListContainer le puedo cambiar el nombre y personalizarlo
const ItemListContainer = ({title}) => {
    return (
        <>
        <h2>{title}</h2>
        <Grid container>
            <Grid item md={3}>
                <CardItem title={'Kokedama 1'} price={500} image={'ticsi-logo.png'}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title='Kokedama 2' price={1500} image={'ticsi-logo.png'}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title='Kokedama 3' price={5500} image={'ticsi-logo.png'}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title='Kokedama 4' price={2500} image={'ticsi-logo.png'}/>
            </Grid>
        </Grid>        
        </>

    )
}

export default ItemListContainer 
//CardList.js - componente contenedor (lista todas las cards que se muestran en pantalla)

import CardItem from '../Card/Card';
import { Grid } from '@mui/material';

const CardList = () => {
    return (
        <>
        <h2>PRODUCTOS RECOMENDADOS</h2>
        <Grid container>
            <Grid item md={3}>
                <CardItem title={'Kokedama 1'} price={500} image={'ticsi-logo.png'}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title='Kokedama 2' price={1500} image={'ticsi-logo.png'}/>
            </Grid>
        </Grid>        
        </>

    )
}

export default CardList 
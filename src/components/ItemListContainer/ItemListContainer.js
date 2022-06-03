//import ItemList
import ItemList from '../ItemList/ItemList';

//import ProductsMock - array de productos
import productsTicsi from '../../utils/ProductsMock';

import { useState, useEffect } from 'react';

const ItemListContainer = () => {

    //setProducts tiene la respuesta de nuestra promise
    const [products, setProducts] = useState ([]);

    //useEffect para que llame al componente 1 sola vez, solo cuando es creado
    useEffect( () => {
        getProducts()
        //llamado asincrono
        .then( (response) => {
            setProducts (response)
        })
        .catch( (error) => {
            console.log('Cath fallo la llamada: ', error);
        })        
        .finally( () => {            
        })        
    }, [])   

    //promise para simular la llamada a la API
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            
            //setTimeout para la "espera" de 2 min
            setTimeout (() => {
                resolve (productsTicsi)
            }, 0)
        })
    }

    return (
        <div>
            <ItemList title={'PRODUCTOS'} products={products}></ItemList>
        </div>
    )

}

export default ItemListContainer;
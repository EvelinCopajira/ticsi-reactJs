//ItemListContainer.js - componente contenedor (lista todas las cards que se muestran en pantalla)

//import itemList
import ItemList from '../ItemList/ItemList';

import { useState, useEffect } from 'react';

const ItemListContainer = () => {

    //setProducts tiene la respuesta de nuestra promise
    const [products, setProducts] = useState ([]);
        
    //simula info que viene de la API
    const productsTicsi = [
    {   
        id: 1,
        title: 'Kokedama 1',
        description:'',
        price: 1500,
        image: 'ticsi-logo.png',
        stock: 2

    },
    {
        id: 2,
        title: 'Kokedama 2',
        description:'',
        price: 500,
        image: 'ticsi-logo.png',
        stock: 3,

    },
    {
        id: 3,
        title: 'Kokedama 3',
        description:'',
        price: 2500,
        image: 'ticsi-logo.png',
        stock: 10,
    },
    {
        id: 4,
        title: 'Kokedama 4',
        description:'',
        price: 800,
        image: 'ticsi-logo.png',
        stock: 1,
    }
    ];

    //promise para simular la llamada a la API
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            
            //setTimeout para la "espera" de 2 min
            setTimeout (() => {
                resolve (productsTicsi)
            }, 2000)
        })
    }

    //useEffect para que llame al componente 1 sola vez, solo cuando es creado
    useEffect( () => {
        getProducts()
        //llamado asincrono
        .then( (response) => {
            setProducts (response)
        }) 

        .catch( (error) => {
        })
        
        .finally( () => {            
        })        
    }, [])   

    return (
        <div>
            <ItemList title={'PRODUCTOS DESTACADOS'} products={products}></ItemList>
            <ItemList title={'PRODUCTOS EN OFERTA'} products={products}></ItemList>
        </div>
    )

}

export default ItemListContainer;
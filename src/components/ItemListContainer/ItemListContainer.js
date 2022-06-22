//import ItemList
import ItemList from '../ItemList/ItemList';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//import firestore
import {collection, getDocs} from 'firebase/firestore';
import dataBase from '../../utils/firebaseConfig';  

const ItemListContainer = () => {
    const [products, setProducts] = useState ([]);    
    const {category} = useParams();
    
    //useEffect para que llame al componente 1 sola vez, solo cuando es creado
    useEffect(() => {
        setProducts([])
        getProductsDB()
        .then((products) => {
            category ? filterByCategory(products, category) : setProducts(products)
        })
        .catch( (error) => {
            console.log('Cath fallo la llamada: ', error);
        })        
        .finally( () => {            
        })        
    }, [category])   

    //firebase - fn async para guardar el resultado de getDocs. Guarda los productos cargados en firebase en productSnapshot
    const getProductsDB = async () => {
        const productSnapshot = await getDocs(collection(dataBase, 'productsTicsi'))
        const productList = productSnapshot.docs.map((doc => {
            let product = doc.data()
            product.id = doc.id
            return product
        }))
        return productList
    }

    //.filter para recorrer el [] y buscar si el category que recibe por useParams coincide con la del producto y devolver un nuevo []
    const filterByCategory = (array) => {
        const productsFilter = array.filter((product) => product.category === category )
        setProducts(productsFilter)
    }

    const categories = () => category ? `${category}` : "PRODUCTOS"
    return (
        <div>
            <ItemList title={`${categories()}`} products={products}></ItemList>
        </div>
    )

}

export default ItemListContainer;
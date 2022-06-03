import ItemList from "../components/ItemList/ItemList";
import productsTicsi from "../utils/ProductsMock";
import { useEffect, useState } from "react";

const ProductsList = () => {
    //setProducts tiene la respuesta de la promise
    const [products, setProducts] = useState ([]);

    //useEffect para que llame al componente 1 sola vez, solo cuando es creado
    useEffect( () => {
        getProducts()
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

export default ProductsList;
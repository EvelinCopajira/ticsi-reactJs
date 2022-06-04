import ItemList from "../components/ItemList/ItemList";
import productsTicsi from "../utils/ProductsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsList = () => {
    //setProducts tiene la respuesta de la promise
    const [products, setProducts] = useState ([]);
    const {category} = useParams ();
    
    //useEffect para que llame al componente 1 sola vez, solo cuando es creado
    useEffect( () => { 
        console.log("category: ", category);
        getProducts()
        .then( (res) => {
            filterByCategory(res)

        })
    },[category])
     
    //promise para simular la llamada a la API
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (productsTicsi)
            }, 0)
        })
    }
    
    //.filter para recorrer el [] y buscar si el category que recibe por useParams coincide con la del producto y devolver un nuevo []
    const filterByCategory = (array) => {
        const productsFilters = array.filter((product) => product.category === category )
        setProducts(productsFilters)
    }    
    
    return (
        <div>
            <ItemList title={`${category}`} products={products}></ItemList>
        </div>
    )
}

export default ProductsList;
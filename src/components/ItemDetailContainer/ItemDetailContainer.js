//import ItemDetail.js
import ItemDetail from "../ItemDetail/ItemDetail";

//import ProductsMock - solo importo el objeto detalle
import { productTicsi1 } from "../../utils/ProductsMock";
import productsTicsi from "../../utils/ProductsMock";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {    
    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({});
    
    //.find para buscar el producto que tenga el mismo id que el clickeado
    const productFilter = productsTicsi.find((product) => {
        return product.id == id
    })

    //useEffect para filtrar el producto por el id  clickeado - .find
    useEffect (() => {  
        if (productFilter === undefined) {
            navigate('/NotFound')
        } else {
            setProduct(productFilter)
        }
    },[])
    
    // useEffect (() => {
    //     getItem()
    //     .then( (res) => {
    //         setProduct (res)
    //     })
    //     .catch( (err) => {
    //         console.log('Cath fallo la llamada: ', err);
    //     })        
    //     .finally( () => {            
    //     }) 
    // }, [])


    // const getItem = () => {
    //     return new Promise ((resolve, reject) => {            
    //         setTimeout (() => {
    //             resolve (productTicsi1)
    //         }, 0)
    //     })
    // }

    //genero una prop nueva 'product' y le paso mi estado con la info 
    return(
        <div>
            <ItemDetail title={'DETALLE DE PRODUCTO'} product={product}/>        
        </div>
    )
}

export default ItemDetailContainer;
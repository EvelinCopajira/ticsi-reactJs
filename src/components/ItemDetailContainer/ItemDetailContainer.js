//import ItemDetail.js
import ItemDetail from "../ItemDetail/ItemDetail";

//import ProductsMock - solo importo el objeto detalle
import { productTicsi1 } from "../../utils/ProductsMock";

import { useState, useEffect } from "react";

const ItemDetailContainer = () => {    

    const [product, setProduct] = useState({});

    useEffect (() => {
        getItem()
        .then( (res) => {
            setProduct (res)
        })
        .catch( (err) => {
            console.log('Cath fallo la llamada: ', err);
        })        
        .finally( () => {            
        }) 
    }, [])

    const getItem = () => {
        return new Promise ((resolve, reject) => {            
            setTimeout (() => {
                resolve (productTicsi1)
            }, 2000)
        })
    }

    //genero una prop nueva 'data' y le paso mi estado con la info 
    return(
        <div>
            <ItemDetail title={'DETALLE DE PRODUCTO'} product={product}/>        
        </div>
    )
}

export default ItemDetailContainer;
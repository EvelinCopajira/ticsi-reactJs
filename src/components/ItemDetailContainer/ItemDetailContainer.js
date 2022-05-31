//import ItemDetail.js
import ItemDetail from "../ItemDetail/ItemDetail";

//import productTicsiDetail - ProductsMock
import { productTicsi1 } from "../../utils/ProductsMock";

import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const getItem = () => {
        return new Promise ((resolve, reject) => {            
            setTimeout (() => {
                resolve (productTicsi1)
            }, 2000)
        })
    }

    useEffect (() => {
        getItem()
        .then( (res) => {
            console.log('respuesta get item: ', res);
            setProduct (res)
        })
        .catch( (error) => {
            console.log('Cath fallo la llamada: ', error);
        })        
        .finally( () => {            
        }) 
    }, [])

    //genero una prop nueva 'data' y le paso mi estado con la info 
    return(
        <div>
            <ItemDetail title={'DETALLE DE PRODUCTO'} data={product}/>        
        </div>
    )
}

export default ItemDetailContainer;
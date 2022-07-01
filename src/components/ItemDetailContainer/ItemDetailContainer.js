//import componente: ItemDetail.js
import ItemDetail from "../ItemDetail/ItemDetail";

//import react
import { useState, useEffect } from "react";

//import react-router-dom
import { useParams } from "react-router-dom";

//import firebase
import {doc, getDoc} from 'firebase/firestore'
import dataBase from "../../utils/firebaseConfig";

const ItemDetailContainer = () => {    
    const {id} = useParams();

    const [product, setProduct] = useState({}); 
        
    //useEffect para filtrar el producto por el id  clickeado - .find
    useEffect (() => {  
        getProduct()
        .then((prod) => {
            setProduct(prod)
        })
// eslint-disable-next-line
    },[id]) 

    const getProduct = async() => {
        const docRef = doc(dataBase, 'productsTicsi', id);
        const docSnaptshop = await getDoc(docRef);
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        return product
    }

    return(
        <div>
            <ItemDetail title={'DETALLE DEL PRODUCTO'} product={product}/>        
        </div>
    )
}

export default ItemDetailContainer;
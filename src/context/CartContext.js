import { createContext } from "react";
import { useState } from "react";


const CartContext = createContext();

const CartProvider = ({children}) => {
    //state para que se guarden todos los productos que vaya agregando al carrito - nuevo array
    const [cartListItems, setCartListItems] = useState([]);

    //fn para que no duplique los productos en el array, que vaya acumulando a medida que agregue
    const addProductToCart = (product) => {
        //.find para encontrar si el producto ya se encuentra en carrito no duplicar iguala los id
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)

        if(!isInCart) {
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const data = {
        cartListItems,
        addProductToCart
    }


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export {CartContext}
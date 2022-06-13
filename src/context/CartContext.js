import { createContext } from "react";
import { useState } from "react";

//creo el contexto
const CartContext = createContext();

//defino el provider que va a darle toda la info a los children
const CartProvider = ({children}) => {
    //state para que se guarden todos los productos que vaya agregando al carrito - nuevo array
    const [cartListItems, setCartListItems] = useState([]);

    //ADD ITEM - fn para que al agregar productos, los unifique y sume cantidad
    const addProductToCart = (product, quantity) => {
        //.find para encontrar si el objeto ya esta en carrito, si no existe lo crea y trae el producto y a cantidad, si el id es el mismo de uno existente los acumula
        let productInCart = cartListItems.find(cartItem => cartItem.productData.id === product.id)
        if (productInCart == undefined) {
            const newProductInCart = {
                productData: product,
                quantity: quantity
            }
            return setCartListItems(cartListItems => [...cartListItems, newProductInCart])
        }
        productInCart.quantity += quantity
        return cartListItems
    }

    //REMOVE ITEM - fn para remover productos del [] y darle funcionalidad al btn eliminar
    const removeProduct = (id) => {
        const copyCartList = [...cartListItems];
        const newCartList = copyCartList.filter((cartListItem) => cartListItem.productData.id !== id);
        setCartListItems(newCartList)
    }

    //CLEAR - fn para vaciar el carrito por completo
    const clearCart = () => {
        setCartListItems([]);
    }

    //fn para llevar la c
    const getAmountOfProducts = () => {
        return cartListItems.length;
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProduct,
        getAmountOfProducts,
        clearCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export {CartContext}
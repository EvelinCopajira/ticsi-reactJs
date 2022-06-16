import { createContext } from "react";
import { useState } from "react";

//creo el contexto
const CartContext = createContext();

//defino el provider que va a darle toda la info a los children
const CartProvider = ({children}) => {
    //state para que se guarden todos los productos que vaya agregando al carrito - nuevo array
    const [cartListItems, setCartListItems] = useState([]);

    const [changeQuantity, setChangeQuantity] = useState(0)

    //ADD ITEM - fn para que al agregar productos, los unifique (si hay mas con el mismo id) y sume cantidad tanto de products(donde no hay count y se suma con la cantidad de clicks) como de item detail que puedo elegir cantidad
    const addProductToCart = (product, quantity) => {
        let productInCart = cartListItems.find(cartItem => cartItem.id === product.id)

        //fn .includes booleano si el producto lo agrego de HOME por primera vez false, si ya hice varios clicks true
        let isInCart = cartListItems.includes(productInCart)

        if (isInCart) {
            productInCart.quantity += quantity
        } else {
            if(!isInCart) {
                product.quantity = quantity
                setCartListItems(cartListItems => [...cartListItems, product])
            }
        }       
    }
    
    const cartItemsQuantity = () => {
        return cartListItems.reduce((acc, item) => (acc + item.quantity), 0)
    }

    const totalCartPrice = () => {
        return cartListItems.reduce((acc, item) => ( acc + (item.quantity * item.price) ), 0);
    }

    //REMOVE ITEM - fn para remover productos del [] y darle funcionalidad al btn eliminar
    // const removeProduct = (id) => {
    //     const copyCartList = [...cartListItems];
    //     const newCartList = copyCartList.filter((cartListItem) => cartListItem.id !== id);
    //     setCartListItems(newCartList)
    // }

    const removeProduct = (itemId) => {
        const productoRemove = cartListItems.find(item => item.id === itemId);
        let indexOfItem = cartListItems.indexOf(productoRemove);
        cartListItems.splice((indexOfItem), 1)
        setCartListItems(cartListItems => [...cartListItems])
    }

    const changeQuantityOfProduct = (itemId, value) => {
        const itemToReduceQuantity = cartListItems.find(item => item.id === itemId);
        itemToReduceQuantity.quantity = itemToReduceQuantity.quantity + value 
        return setChangeQuantity(changeQuantity + value)     
    }

    //CLEAR - fn para vaciar el carrito por completo
    const clearCart = () => {
        setCartListItems([]);
    }

    //fn para llevar la cantidad al Icon Cart del NavBar
    const getAmountOfProducts = () => {
        return cartListItems.length;
    }

    const data = {
        cartListItems,
        addProductToCart,
        removeProduct,
        getAmountOfProducts,
        clearCart,
        cartItemsQuantity,
        totalCartPrice,
        changeQuantityOfProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export {CartContext}
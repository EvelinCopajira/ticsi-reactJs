import { createContext } from "react";
import { useState } from "react";

//creo el contexto
const CartContext = createContext();

//defino el provider que va a darle toda la info a los children
const CartProvider = ({children}) => {
    //state para que se guarden todos los productos que vaya agregando al carrito - nuevo array - traigo del local storage la key 'products'
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || []);

    const [changeQuantity, setChangeQuantity] = useState(0)

    //ADD ITEM - fn para que al agregar productos, los unifique (si hay mas con el mismo id) y sume cantidad tanto de products(donde no hay count y se suma con la cantidad de clicks) como de item detail que puedo elegir cantidad
    const addProductToCart = (product, quantity) => {
        let productInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        //fn .includes booleano si el producto lo agrego de HOME por primera vez false, si ya hice varios clicks true
        let isInCart = cartListItems.includes(productInCart)
        if (isInCart) {
            productInCart.quantity += quantity
        } else {
            product.quantity = quantity
            //localStorage para guardar los productos agregados al carrito
            localStorage.setItem('products', JSON.stringify ([...cartListItems, product])) 
            setCartListItems(cartListItems => [...cartListItems, product])
        }       
    }
    
    //fn .reduce para acumular las cantidades ingresadas de todos los productos, por qty de clicks o por cantidad seleccionada desde el count, para devolver un unico valor final, inicializando en 0
    const cartItemsQuantity = () => {
        return cartListItems.reduce((acc, item) => (acc + item.quantity), 0)
    }
    
    //fn .reduce para que al acumulado de cantidades lo multiplique por el precio de cada item (pxq) y de el total del carrito, inicializado en 0
    const totalCartPrice = () => {
        return cartListItems.reduce((acc, item) => ( acc + (item.quantity * item.price) ), 0);
    }    

    //REMOVE ITEM - fn .find para encontrar el producto que tenga el mismo id que itemId
    const removeProduct = (itemId) => {
        const productToRemove = cartListItems.find(item => item.id === itemId);
        //fn .indexOf para traer el indice del producto a remover (el que tenia el mismo id) y guardarlo en una variable
        let indexOfItem = cartListItems.indexOf(productToRemove);        
        //fn .splice para que elimine 1 elemento del nuevo array [indexOfItem], que sera el que coincida con el id que estoy buscando
        cartListItems.splice((indexOfItem), 1);
        //localStorage para eliminar los productos del carrito
        localStorage.setItem('products', JSON.stringify ([...cartListItems]))      
        setCartListItems(cartListItems => [...cartListItems])
    }

    const changeQuantityOfProduct = (itemId, value) => {
        const itemToReduceQuantity = cartListItems.find(item => item.id === itemId);
        itemToReduceQuantity.quantity = itemToReduceQuantity.quantity + value 
        return setChangeQuantity(changeQuantity + value)     
    }

    //CLEAR - fn para vaciar el carrito por completo
    const clearCart = () => {
        //localStorage para eliminar todos los productos del carrito
        localStorage.setItem('products', JSON.stringify ([]))      
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
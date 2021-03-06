//import react
import { createContext, useState } from "react";

//creo el contexto
const CartContext = createContext();

//defino el provider que va a darle toda la info a los children
const CartProvider = ({children}) => {
    //state para que se guarden todos los productos que vaya agregando al carrito - nuevo array - traigo del local storage la key 'products'
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || []);

    //ADD ITEM - fn para que al agregar productos, los unifique (si hay mas con el mismo id) y sume cantidad tanto de products(donde no hay count y se suma con la cantidad de clicks) como de item detail que puedo elegir cantidad
    const addProductToCart = (product, quantity) => {
        let productInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        const isInCart = productInCart !== undefined

        //si no lo tengo en el carrrito, lo inicializo (el productInCart es el producto que paso como parametro) con cantidad en cero
        if (!isInCart) {
            productInCart = product;
            productInCart.quantity = 0;
        }
        
        //productInCart es el producto con el que opero. Verifico stock (tomando en cuenta la quantity + lo que quiero agregar), y si da el stock, agrega
        const totalQuantity = productInCart.quantity + quantity;
        if (totalQuantity > productInCart.stock) {
            return;
        }

        productInCart.quantity = totalQuantity;

        //creo una newList para traer el detalle del carrito, si el producto no está en el carrito lo agrega al existente, y si está trae el cartListItems y modifica solo la cantidad
        const newList = isInCart ? cartListItems : [...cartListItems, productInCart];

        //localStorage para agregar los productos del carrito
        localStorage.setItem('products', JSON.stringify(newList))
        return setCartListItems(cartListItems => newList);
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
        return setCartListItems(cartListItems => [...cartListItems])
    }

    //CLEAR - fn para vaciar el carrito por completo
    const clearCart = () => {
        //localStorage para eliminar todos los productos del carrito
        localStorage.setItem('products', JSON.stringify ([]))      
        return setCartListItems([]);
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
        totalCartPrice,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export {CartContext};
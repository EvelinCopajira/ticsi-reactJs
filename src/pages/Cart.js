import {Container} from '@mui/material'

import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Modal from '../components/Modal/Modal'
import TextField from '@mui/material/TextField';

//import firestore
import { addDoc, collection } from 'firebase/firestore'
import dataBase from '../utils/firebaseConfig';

const Cart = () => {
    const {cartListItems, removeProduct, totalCartPrice, clearCart} = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    //estado para guardar todo el imput ingresado en el form
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        mail: ''
    })

    //estado para guardar la orden de cada usuario
    const [order, setOrder] = useState({
        buyer: {},
        //hago un filtro de las keys que necesito de cada card/producto - .map para devolver un [] con la estructura del return
        items: cartListItems.map( (item) => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        total: totalCartPrice()
    })

    //submit del form, donde evito que se recargue la pagia con el .prevenDefault
    const handleSubmit = (e) => {
        e.preventDefault()
        //set para que el comprador tenga todos los datos del form
        setOrder({...order, buyer: formValue})
        //con cada submit actualiza la informacion de la orden
        saveData({...order, buyer: formValue})
    }

    //traigo el valor del imput a traves del evento onChange y guardo todo en setState segun el valor ingresado en cada propiedad (name/phone/mail), asocia el imput segun desde donde se ingrese, filtrando por el atributo name
    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    //fn para subir toda la orden a firebase
    const saveData = async (newOrder) => {
        const orderFirebase = collection(dataBase, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc)
        setSuccess(orderDoc.id)
        clearCart()
    }

    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const finishOrder = () => {
        navigate('/')
    }


    return(
        <Container className='checkout-container '>
            {console.log('orden: ', order)}
            <h2>CARRITO DE COMPRAS - CHECKOUT</h2>
            {cartListItems.length === 0 ? (
                <>
                <h3>El carrito está vacío</h3>
                <Button variant='outlined' >
                    <Link to={'/products'} className='btn-back-products'>Empezá a comprar</Link>
                </Button>
                </>
            ) : (
                <>
                <div className="cart-table-header">
                    TITULOS
                </div>
                {cartListItems.map((item) => {
                    return(
                        <div className="cart-table-content" key={item.id}>
                            <div>
                                <img src={`/${item.image}`} alt='imagen-producto' />
                            </div>
                            <p>{item.title}</p>
                            <p>CANTIDAD:{item.quantity}</p>
                            <span>PRECIO: ${item.price}</span>
                            <p>SUTOTAL: ${item.price*item.quantity}</p>
                            <button className='btn-delete-item' >
                                <DeleteIcon onClick={() => removeProduct(item.id)}/>
                            </button>
                        </div>
                    )
                })}
                <div className="cart-footer">
                    <p className="total-cart-price">Total: ${totalCartPrice()}</p>
                </div>
                <Button variant='outlined' onClick={() => setShowModal(true)}>
                    TERMINAR COMPRA
                </Button>
                </>
            )}
                <Modal title={success ? 'COMPRA EXITOSA' : 'FORMULARIO DE CONTACTO'} open={showModal} handleClose={() => setShowModal(false)}>
                {success ? (
                    <div>
                        La orden fue generada con éxito!
                        Numero de orden: {success}
                        <button onClick={finishOrder}>ACEPTAR</button>
                    </div>
                ) : (
                    <form className="form-contact" onSubmit={handleSubmit}>
                        <TextField 
                            id="outlined-basic" 
                            name="name"
                            label="NOMBRE Y APELLIDO" 
                            variant="outlined" 
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        <TextField 
                            id="outlined-basic" 
                            name="phone"
                            label="TELÉFONO" 
                            variant="outlined" 
                            value={formValue.phone}
                            onChange={handleChange}
                        />
                        <TextField 
                            id="outlined-basic" 
                            name="mail"
                            label="Mail" 
                            value={formValue.mail}
                            variant="outlined" 
                            onChange={handleChange}
                        />
                        <button type="submit">ENVIAR</button>
                    </form>
                )}
                
            </Modal>            
        </Container>
    )
}

export default Cart;
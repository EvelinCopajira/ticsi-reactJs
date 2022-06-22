import {Container} from '@mui/material'

import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Modal from '../components/Modal/Modal'
import TextField from '@mui/material/TextField';


//import firestore
import {collection, addDoc} from 'firebase/firestore';
import dataBase from '../utils/firebaseConfig';  


const Cart = () => {
    const {cartListItems, removeProduct, totalCartPrice, clearCart} = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);

    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        total: totalCartPrice
    })

    const [success, setSuccess] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        navigate('/')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(dataBase, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
        clearCart()
    }

    return(
        <Container className='checkout-container '>
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
                        name="EMAIL"
                        label="Mail" 
                        value={formValue.email}
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
//import CSS
import './Cart.css';
import {Container} from '@mui/material';

import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Modal from '../../components/Modal/Modal'
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"


//import firestore
import { addDoc, collection } from 'firebase/firestore'
import dataBase from '../../utils/firebaseConfig';

const Cart = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

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
    const endPurchase = (e) => {
        //set para que el comprador tenga todos los datos del form
        setOrder({...order, buyer: formValue})
        //con cada submit actualiza la informacion de la orden
        saveData({...order, buyer: formValue})
    }

    //traigo el valor del imput a traves del evento onChange y guardo todo en setState segun el valor ingresado en cada propiedad (name/phone/mail), asocia el imput segun desde donde se ingrese, filtrando por el atributo name
    const handleChange = (e) => {
        e.preventDefault();
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    //fn para subir toda la orden a firebase
    const saveData = async (newOrder) => {
        const orderFirebase = collection(dataBase, 'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
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
            <h2>checkout</h2>
            {cartListItems.length === 0 ? (
                <>
                <h3>El carrito está vacío</h3>
                <Button className='btn' >
                    <Link to={'/products'} className='btn-back-products'>Empezá a comprar</Link>
                </Button>
                </>
            ) : (
                <>
                <div className="cart-table-header">
                    <h4>IMÁGEN</h4>
                    <h4>NOMBRE</h4>
                    <h4>CANTIDAD</h4>
                    <h4>PRECIO UNITARIO</h4>
                    <h4>SUBTOTAL</h4>
                    <h4>ELIMINAR</h4>
                </div>
                {cartListItems.map((item) => {
                    return(
                        <div className="cart-table-content" key={item.id}>
                            <div className='cart-table-item'>
                                <img src={`/${item.image}`} alt='imagen-producto' />
                            </div>
                            <div className='cart-table-item'>
                                <p>{item.title}</p>
                            </div>
                            <div className='cart-table-item'>
                                <p>{item.quantity}</p>
                            </div>
                            <div className='cart-table-item'>
                                <p>${item.price}</p>
                            </div>
                            <div className='cart-table-item'>
                                <p>${item.price*item.quantity}</p>
                            </div>
                            <button className='btn-delete-item' >
                                <DeleteIcon onClick={() => removeProduct(item.id)}/>
                            </button>
                        </div>
                    )
                })}
                <div className="cart-footer">
                    <p className="total-cart-price">Total ${totalCartPrice()}</p>
                </div>
                <Button className='btn' onClick={() => setShowModal(true)}>
                    TERMINAR COMPRA
                </Button>
                </>
            )}
                <Modal title={success ? 'COMPRA CONFIRMADA' : 'FORMULARIO DE CONTACTO'} open={showModal} handleClose={() => setShowModal(false)}>
                {success ? (
                    <div className='order-finished'>
                        <p>Muchas gracias por tu compra!</p>
                        <p>La orden fue generada con éxito</p>
                        <p>Número de orden: {success}</p>                        
                        <button onClick={finishOrder} className='btn-submit'>ACEPTAR</button>
                    </div>
                ) : (
                    <form className="form-contact" onSubmit={handleSubmit(endPurchase)}>
                        <TextField 
                            id="outlined-basic"
                            name="name"
                            label="NOMBRE Y APELLIDO" 
                            variant="outlined" 
                            value={formValue.name}
                            type='text'
                            {...register('name', {
                                required: true,
                                minLength: 5,
                                pattern: /^[A-Za-z]+ [A-Za-z]+$/
                            })}
                            onChange={handleChange}
                            />
                        {errors.name?.type === 'required' && 'Este campo es requerido'}
                        {errors.name?.type === 'minLength' && 'Ingreso mínimo de 5 caracteres'}
                        {errors.name?.type === 'pattern' && 'Solo se pueden ingresar letras'}

                        <TextField 
                            id="outlined-basic"                           
                            name="phone"
                            label="TELÉFONO" 
                            variant="outlined" 
                            value={formValue.phone}
                            type='number'
                            {...register('phone', {
                                required: true,
                                pattern: /^[0-9]*$/,
                                minLength: 8
                            })}
                            onChange={handleChange}
                        />
                        {errors.phone?.type === 'required' && 'El campo es requerido'}
                        {errors.phone?.type === 'minLength' && 'Debe ingresar por lo menos 8 números'}

                        <TextField 
                            id="outlined-basic"
                            name="mail"
                            label="MAIL" 
                            variant="outlined" 
                            value={formValue.mail}
                            type='text'
                            {...register('mail', {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            })}
                            onChange={handleChange}
                        />
                        {errors.mail?.type === 'required' && 'El campo es requerido'}
                        {errors.mail?.type === 'pattern' && 'Formato requerido: exaple@example.com'}
                        
                        <button type="submit" className='btn-submit'>ENVIAR</button>
                    </form>
                )}
                
            </Modal>            
        </Container>
    )
}

export default Cart;
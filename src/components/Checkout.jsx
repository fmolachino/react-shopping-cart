import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

const styles = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
}


const Checkout = () => {

    const [orderId, setOrderId] = useState("");

    const { addedProducts, totalPrice, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const sendOrder = (data) => {
        const buyOrder = {
            client: data,
            products: addedProducts,
            totalPriceOfOrder: totalPrice(),
        }
        
        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, buyOrder)
            .then((doc) => {
                setOrderId(doc.id)
                clearCart()
            })
    }

    if (orderId) {
        return (
            <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Hey! Thanks for your purchase.</h1>
                <p>We remember you the order id: {orderId}</p>
                <p>Please, save this id, if something happens id will be asked.</p>
            </div>
        )
    }


    return (
        <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="main-title">Submit Order</h1>
        <form className="form" onSubmit={handleSubmit(sendOrder)} style={{ textAlign: 'center', alignItems: 'center' }}>

            <input type="text" placeholder="Please enter your name" {...register("name")} style={styles}/>
            <input type="email" placeholder="Please enter your e-mail" {...register("email")} style={styles}/>
            <input type="phone" placeholder="Please enter your phone number" {...register("phone")} style={styles}/>

            <button className="sendOrder" type="submit">Confirm Order</button>

        </form>
        </div>
    )
}

export default Checkout
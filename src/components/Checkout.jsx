import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";




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
            <div className="container">
                <h1>Hey! Thanks for your purchase.</h1>
                <p>We remember you the order id: {orderId}</p>
                <p>Please, save this id, if something happens id will be asked.</p>
            </div>
        )
    }


    return (
        <div className="container">
        <h1 className="main-title">Submit Order</h1>
        <form className="form" onSubmit={handleSubmit(sendOrder)}>

            <input type="text" placeholder="Please enter your name" {...register("name")} />
            <input type="email" placeholder="Please enter your e-mail" {...register("email")} />
            <input type="phone" placeholder="Please enter your phone number" {...register("phone")} />

            <button className="sendOrder" type="submit">Confirm Order</button>

        </form>
        </div>
    )
}

export default Checkout
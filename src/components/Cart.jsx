import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"

//import products from "../data/products.json"

const Cart = () => {

    const { addedProducts, totalPrice } = useContext(CartContext);


    return (
        
        <div className="container">
            <h1 className="cart-title">
                Cart 
            </h1>

            {
                addedProducts.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price per unit: ${product.price}</p>
                        <p>Total price: ${product.price * product.quantity}</p>
                    </div>
                ))
            }

            <h2>Total Price: ${totalPrice()}</h2>

        </div>
    )

}

export default Cart
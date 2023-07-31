import React, { useContext } from "react"
import { CartContext } from "../context/cartContext"

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1>
                Cart
            </h1>

            {
                cart.map((product) => (
                    <h2>{product.name}</h2>
                ))
            }

        </div>
    )

}

export default Cart
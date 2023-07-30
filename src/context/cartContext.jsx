import { createContext } from "react";

import { useCart } from "../auxiliaries/useCart";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    
    const cart = useCart()

    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}
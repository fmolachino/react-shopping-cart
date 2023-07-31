import cartIcon from "../assets/cartIcon.png"

import { CartContext } from "../context/cartContext";
import { useContext } from "react";

const styles = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color: "white",
        paddingLeft: 12,
    },
}

export const CartWidget = () => {

    
    
    return (
        <>
            <img src={cartIcon} style={styles.img} alt="shopping cart icon" /> 
            <span style={styles.span}>0</span>
         </>
    )
}
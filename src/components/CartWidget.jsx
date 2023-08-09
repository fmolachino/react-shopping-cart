import cartIcon from "../assets/cartIcon.png"
import { Link } from "react-router-dom"


import { CartContext } from "../context/CartContext";
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

    const { amountOfProducts } = useContext(CartContext);
    
    return (
        <>

        <Link to={`/cart`}>
        <img src={cartIcon} style={styles.img} alt="shopping cart icon" /> 
        </Link>
        <span style={styles.span}>{amountOfProducts()}</span>
            
         </>
    )
}
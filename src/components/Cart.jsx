import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

//import products from "../data/products.json"

//TODO center stuff and make it more visual appealing.

const Cart = () => {
  const { addedProducts, totalPrice, clearCart, deleteItem } =
    useContext(CartContext);

  const handleClearCart = () => {
    clearCart();
  };

  const handleDeleteItem = (id) => {
    deleteItem(id);
  };

  return (
    <div className="container">
      <h1 className="cart-title">Cart</h1>

      {addedProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Quantity: {product.quantity}</p>
          <p>Price per unit: ${product.price}</p>
          <p>Total price: ${product.price * product.quantity}</p>
          <button onClick={() => handleDeleteItem(product.id)}>
            Delete item
          </button>
        </div>
      ))}

      {addedProducts.length > 0 ? (
        <>
          <h2>Total Price: ${totalPrice()}</h2>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      ) : (
        <h2>Cart is empty, please add a product!</h2>
      )}
    </div>
  );
};

export default Cart;

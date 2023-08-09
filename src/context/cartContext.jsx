import { createContext, useEffect } from "react";

import { useState } from "react";

export const CartContext = createContext([]);

const initialCart = JSON.parse(localStorage.getItem("addedProducts")) || [];

export const CartProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState(initialCart);

  const addToCart = (product, quantity) => {
    const { stock, ...rest } = product;

    //logic to check if an item was already added to the cartContext
    const alreadyAdded = addedProducts.some(
      (product) => product.id === rest.id
    );

    if (!alreadyAdded)
      setAddedProducts((prev) => [...prev, { ...rest, quantity }]);
        
    else {
      const updateProducts = addedProducts.map((product) => {
        if (product.id === rest.id)
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        else return product;
      });
      setAddedProducts(updateProducts);
    }

  };

  const deleteItem = (id) => {
    const restProducts = addedProducts.filter((product) => product.id !== id);
    setAddedProducts(restProducts);
  };

  const totalPrice = () => {
    return addedProducts.reduce(
      (acu, prod) => acu + prod.price * prod.quantity,
      0
    );
  };

  const amountOfProducts = () => {
    return addedProducts.reduce((acu, prod) => acu + prod.quantity, 0);
  };

  const clearCart = () => setAddedProducts([]);

  useEffect(() => {
    localStorage.setItem("addedProducts", JSON.stringify(addedProducts))
  }, [addedProducts])

  return (
    <CartContext.Provider
      value={{
        addedProducts,
        addToCart,
        deleteItem,
        clearCart,
        totalPrice,
        amountOfProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

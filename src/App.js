import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { useState } from "react";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

import { NavBar } from "./components/NavBar";
import  Cart  from "./components/Cart";

import { CartContext, CartProvider } from "./context/CartContext";

export default function App() {

  return (
    <>
    {/* Whatever element is wraped by the provider, will have acces to it. */}
      <CartProvider >   
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Welcome to Fer's Shop" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Welcome to Fer's Shop" />}
            />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>  
  );
}

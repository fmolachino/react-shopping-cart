import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";


import productData from "../data/products.json";

//making a category set (set means unique elements withing its limit)
const categories = productData.map(product => product.category)
const uniqueCategories = new Set(categories)

//navBar items: deprecated
// const navMenu = [
//   {text: "Home", link: "/home"},
//   {text: "Products", link: "/products"},
//   {text: "Contact Us", link: "/contactus"}
// ]


export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand className="nav-link" to="/">Fer E-Commerce</Navbar.Brand>
      <Nav className="me-auto">
        {[...uniqueCategories].map((product) => 
          <NavLink key={product.id} className="nav-link" to={`/category/${product}`}> {product} </NavLink>)}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
)
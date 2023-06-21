import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";


//navBar items:
const navMenu = [
  {text: "Home", link: "/home"},
  {text: "Products", link: "/products"},
  {text: "Contact Us", link: "/contactus"}
]


export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/home">Fer E-Commerce</Navbar.Brand>
      <Nav className="me-auto">
        {navMenu.map((item) => 
          <Nav.Link key={item.text} href={item.link}>{item.text}</Nav.Link>)}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
)
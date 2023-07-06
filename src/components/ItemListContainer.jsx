import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

import productData from "../data/products.json";
import { ItemList } from "../components/ItemList"

//TODO: to be a future page
export const ItemListContainer = props => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const myPromise = new Promise((resolve, rejected) => {
      setTimeout(() => {
         resolve(productData);
      }, 2000)
    })

    myPromise.then((result) => setProducts(result));
  }, [])

  return (
    <Container className="mt-3">
      <h1>{props.greeting}</h1>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        products.map(product => <div key={product.id}>{product.name}</div>)
      )}
    </Container>
  )
}

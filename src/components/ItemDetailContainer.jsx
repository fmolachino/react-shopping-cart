import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productData from "../data/products.json";
import { ItemDetail } from "./ItemDetail"

const styles = {
    productContainer: {
        display: "flex",
        flexWrap: "wrap",
    }
}

//TODO: Finish the ID detail nav.
export const ItemDetailContainer = props => {
  const [products, setProducts] = useState([])

  
  useEffect(() => {
    const myPromise = new Promise((resolve, rejected) => {
      setTimeout(() => {
         resolve(productData);
      }, 2000)
    })

    myPromise.then(result => {
            setProducts(result)
        })
  }, [])

  return (
        <Container style={styles.productContainer} className="mt-3">
          <h1>Product Detail:</h1>
          {products.length === 0 ? (
              <div>Loading...</div>
          ) : <ItemDetail product={products} />
          }
        </Container>
  )
}


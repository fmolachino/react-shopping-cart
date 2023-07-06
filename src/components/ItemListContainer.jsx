import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import productData from "../data/products.json";
import { ItemList } from "../components/ItemList"

const styles = {
    productContainer: {
        display: "flex",
        flexWrap: "wrap",
    }
}

//TODO: to be a future page
export const ItemListContainer = props => {
  const [products, setProducts] = useState([])

  const { id } = useParams()

  //bringing data from the json, simulate 2 seconds timeout
  useEffect(() => {
    const myPromise = new Promise((resolve, rejected) => {
      setTimeout(() => {
         resolve(productData);
      }, 2000)
    })

    myPromise.then(result => {
        if (id) {
            setProducts(
                result.filter(product => product.category === id))
        } else {
            setProducts(result)
        }
    })
        
  }, [id])

  return (
    <>
        <h1>{props.greeting}</h1>
        <Container style={styles.productContainer} className="mt-3">
        {products.length === 0 ? (
            <div>Loading...</div>
        ) : <ItemList products={products} />
        }
        </Container>
    </>
  )
}


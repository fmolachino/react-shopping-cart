import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { askItemFromId } from "../auxiliaries/askForData";

import { ItemDetail } from "./ItemDetail"

const styles = {
    productContainer: {
      display: "flex",
      justifyContent: "center", // Horizontally center
      alignItems: "center", // Vertically center
      height: "70vh"
    }
}

//TODO: Finish the ID detail nav.
export const ItemDetailContainer = props => {

  const [products, setProducts] = useState([])

  const id = useParams().id;

  
  useEffect(() => {
    askItemFromId(id)
      .then((res) => {
        setProducts(res);
      })
  }, [id])

  
  return (
    <>
        <div style={{ textAlign: "center" }}><h1>Product Details:</h1></div>
        <Container style={styles.productContainer} className="mt-3">
          
          {products.length === 0 ? (
              <div>Loading...</div>
          ) : <ItemDetail product={products} />
          }
        </Container>
    </>
  )
}


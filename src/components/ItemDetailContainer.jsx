import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import { db } from "../firebase/config"; 

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

  const [item, setItem] = useState(null);
  const [products, setProducts] = useState([])

  const id = useParams().id;

  
  useEffect(() => {
    
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((resp) => {
        setItem(
        { ...resp.data(), id: resp.id}
        );
        setProducts(
        { ...resp.data(), id: resp.id}
        )
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


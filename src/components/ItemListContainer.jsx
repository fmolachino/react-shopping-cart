import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ItemList } from "../components/ItemList";

import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../firebase/config";

const styles = {
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
};


export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  const category = useParams().category;

  //bringing data from firestore
  useEffect(() => {
    const productsRef = collection(db, "products");

    const filteredFromCategory = category ? query(productsRef, where("category", "==", category)) : productsRef;

    getDocs(filteredFromCategory).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{props.greeting}</h1>
      <Container
        style={styles.productContainer}
        className="mt-3 d-flex justify-content-center align-items-center"
      >
        {products.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <ItemList products={products} />
        )}
      </Container>
    </>
  );
};

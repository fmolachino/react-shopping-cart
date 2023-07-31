import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";


const styles = {
  borderless: {
    border: 'none',
  },
}

//if i want to add more than one unit per click, i can do ir via step (now harcoded as 1)
function ItemCounter({ product, counter, onAdd, setCount }) {

  const [showAlert, setShowAlert] = useState(false);

  const increment = () => {
    if (counter + 1 <= product.stock) {
      setCount(counter => counter + 1);
    
    //throw alert if counter reached maximum stock
    } else if ((counter + 1) > product.stock) {
      alert("Reached maximum available stock!")
    }

  };

  const decrement = () => {
    if (counter >= 1) {
      setCount(counter - 1);
    }
  };

  

  return (
    <div>
      <button style={styles.borderless} onClick={decrement}>-</button>
      <span>{counter}</span>
      <button style={styles.borderless} onClick={increment}>+</button>
      {<button onClick={onAdd}>Add to cart</button>}
    </div>
  );
}

export default ItemCounter;

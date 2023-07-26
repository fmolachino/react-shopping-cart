import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";


const styles = {
  borderless: {
    border: 'none',
  },
}

function ItemCounter({ initialValue, itemStock, step, /*handleClickAdd*/ }) {
  const [count, setCount] = useState(initialValue);
  const [showAlert, setShowAlert] = useState(false);





  const increment = () => {
    if (count + step <= itemStock) {
      setCount(count => count + step);
    
    //throw alert if counter reached maximum stock
    } else if ((count + step) > itemStock) {
      alert("Reached maximum available stock!")
    }

  };

  const decrement = () => {
    if (count > step) {
      setCount(count - step);
    }
  };

  return (
    <div>
      <button style={styles.borderless} onClick={decrement}>-</button>
      <span>{count}</span>
      <button style={styles.borderless} onClick={increment}>+</button>
      {/* <button onClick={handleClickAdd}>Add to cart</button> */}
    </div>
  );
}

export default ItemCounter;

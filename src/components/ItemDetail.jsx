import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ItemCounter from "./ItemCounter";
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext";
import { useContext } from "react";


const cardMargin = '4px';



export const ItemDetail = ({product}) => {

  const { addItem } = useContext(CartContext)



  const onAddItem = quantity => addItem(product, quantity)


    return (
        <Card style={{ width: '18rem', margin: cardMargin}}
            key={product.id}
            className="">
          <Card.Img variant="top" src={product.image} alt={product.name}/>
          <Card.Body>
            <Card.Title>{product.name} - ${product.price}</Card.Title>
            <Card.Text>
             Category: {product.category}
            </Card.Text>
            <ItemCounter initialValue={1} itemStock={product.stock} step={1} onAdd={onAddItem} />
            <Link to={`/item/${product.id}`}>
                <Button variant="primary">See detail</Button>
            </Link>
          </Card.Body>
        </Card>
    )
}
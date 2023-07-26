//import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ItemCounter from "./ItemCounter";
//import { Link } from "react-router-dom"

const cardMargin = '4px';



export const Item = ({product}) => {
    return (
        <Card style={{ width: '18rem', margin: cardMargin}}
            key={product.id}
            className="">
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name} - ${product.price}</Card.Title>
            <Card.Text>
             Category: {product.category}
            </Card.Text>
            <ItemCounter initialValue={1} itemStock={product.stock} step={1} /*handleClickAdd={handleClickOnAdd}*/ />
            {/* <Link to={`/item/${product.id}`}>
                <Button variant="primary">See detail</Button>
            </Link> */}
          </Card.Body>
        </Card>
    )
}
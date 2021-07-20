import React from 'react'
import { Card } from 'react-bootstrap'

const CardProduct = ({product}) => {
    return (
        <Card className="my-2 p-2 rounded">
            <Card.Img src={product.image}></Card.Img>
            <Card.Body>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Card.Body>
            <Card.Text as="div">
                <div className="h3">{product.price}</div>
            </Card.Text>
        </Card>
    )
}

export default CardProduct

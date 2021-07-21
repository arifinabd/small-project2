import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardProduct = ({product}) => {
    return (
        <Card className="my-2 p-2 rounded">
            <Link to={`/productPage/${product.id}`} /*to={'/cart'}*/>
            <Card.Img src={product.image}></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/productPage/${product.id}`} /*to={'/cart'}*/ style={{color: 'black',textDecoration: 'none'}}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                </Link>               
            </Card.Body>
            <Card.Text as="div">
                <div className="h3">{product.priceDisc}</div>
                <div className="h5" style={{textDecoration: 'line-through'}}>{product.priceReal}</div>
            </Card.Text>
        </Card>
    )
}

export default CardProduct

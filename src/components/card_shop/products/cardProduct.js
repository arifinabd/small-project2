import React from 'react'
import { Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { useEffect } from 'react'

// import { getProducts } from '../../store/action/product'
// import { addToCart } from '../../store/action/product'

const CardProduct = (props) => {
    // useEffect(() => {
    //     props.getProducts()
    // }, [])
    // console.log(props)

    // const handleAddToCart = (id) => {
    //     props.addToCart(id)
    //     alert('add to cart')
    // }

    return (
        <Card className="my-2 p-2 rounded">
            <Link to={`/productPage/${props.product.id}`}>
            <Card.Img src={props.product.image}></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/productPage/${props.product.id}`} style={{color: 'black',textDecoration: 'none'}}>
                <Card.Title as="div">
                    <strong style={{fontSize:'30px'}}>{props.product.name}</strong>
                </Card.Title>
                </Link>               
            </Card.Body>
            <Card.Text as="div">
                <div className="h3">${props.product.priceDisc}</div>
                <div className="h5" style={{textDecoration: 'line-through'}}>${props.product.priceReal}</div>
                <div className="h5">Stock : {props.product.stock}</div>
            </Card.Text>
            {/* <Button variant="secondary" size="sm" onClick={() => handleAddToCart(props.product.id)}>
                ADD CART
            </Button> */}
        </Card>
    )
}

// const mapStateToProps = (state) => {
//     return{
//         products: state.productReducer.products,
//         carts: state.productReducer.carts
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         getProducts: () => dispatch(getProducts()),
//         addToCart: (id) => dispatch(addToCart(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CardProduct)
export default CardProduct

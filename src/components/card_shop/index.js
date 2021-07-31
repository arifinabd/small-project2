import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { withRouter } from 'react-router'

import Itemproducts from './products/itemProduct'
import CardProduct from './products/cardProduct'
import "./style.scss"
import { getProducts, addToCart } from '../../store/action/product'

function CardShop(props) {
    useEffect(() => {
        props.getProducts()
    }, [])
    console.log(props)

    const handleAddToCart = (id) => {
        props.addToCart(id)
        alert('add to cart')
        props.history.push('/list-shop')
    }
    console.log(props.history)
    return (
        <Container>
            <Row sm={3} md={3} lg={3} xl={3}>
                {props.products && props.products.map((val, key) => (
                    <Col key={key} >
                     <CardProduct product={val}></CardProduct>
                     <Button variant="secondary" size="sm" onClick={() => handleAddToCart(val.id)}>
                        ADD CART
                    </Button>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}
const mapStateToProps = (state) => {
    return{
        products: state.productReducer.products,
        carts: state.productReducer.carts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getProducts: () => dispatch(getProducts()),
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardShop))

        // <div>
        //     <div className="conhal3_2">
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1"> TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //         <div className="conhal3_2child">
        //             <div className="conhal3_2child1">TITLE HERE</div>
        //             <div className="conhal3_2child2"><span>CATEGORY</span></div>
        //         </div>
        //     </div>
        // </div>

// export default CardShop

import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'

import Itemproducts from '../products/itemProduct'
import CardProduct from '../products/cardProduct'
import "./style.scss"

function CardShop() {
    return (
        <Container>
            <Row sm={3} md={3} lg={3} xl={3}>
                {Itemproducts.map((product) => (
                    <Col key={product.id} >
                     <CardProduct product={product}></CardProduct>
                    </Col>
                ))}
            </Row>
        </Container>

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
    )
}

export default CardShop

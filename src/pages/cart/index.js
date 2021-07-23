import React from 'react'
import { Card, Table } from 'react-bootstrap'
import { Row, Container, Col, Button, CloseButton } from 'react-bootstrap'
import { connect } from 'react-redux'

import './style.scss'
import Header from '../../components/header'
 
 const Cart = (props) => {
     console.log(props)
     return (
         <div>
            <Header/>
             <h1>CART LIST</h1>
             <div>
                 <Table width="80%">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.carts && props.carts.map((val, key) => {
                            
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <Button variant="outline-light" size='sm' style={{fontWeight:'bold'}}> - </Button>
                                <input></input>
                                <Button variant="outline-light" size='sm' style={{fontWeight:'bold'}}> + </Button>
                            </td>
                            <td></td>
                            <td></td>
                            <td><CloseButton/></td>
                        </tr>
                    </tbody>
                 </Table>
             </div>
             
         </div>
     )
 } 
 const mapStateToProps = (state) => {
    return{
        // products: state.productReducer.products,
        carts: state.productReducer.carts
    }
}

export default connect(mapStateToProps, null)(Cart)
 
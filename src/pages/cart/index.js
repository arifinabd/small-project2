import React from 'react'
import { Card, Table } from 'react-bootstrap'
import { Row, Container, Col, Button, CloseButton } from 'react-bootstrap'
import { connect } from 'react-redux'

import './style.scss'
import Header from '../../components/header'
import { deleteCart } from '../../store/action/product'
 
 const Cart = (props) => {
     const handleCancel = (id) => {
        props.deleteCart(id)
     }
     const handleOnChange = () => {

     }
     console.log(props)
     return (
         <div>
            <Header/>
             <h1>CART LIST</h1>
             <div>
                {props.carts.length < 1 ? (
                    <h2>Cart Is Empty!</h2>
                ): (
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
                                const subtotal = val.qty * val.priceDisc
                                return(
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{val.name}</td>
                                        <td>
                                            <Button variant="outline-light" size='sm' style={{fontWeight:'bold'}}> - </Button>
                                            <input value={val.qty} onChange={() => {handleOnChange()}}/>
                                            <Button variant="outline-light" size='sm' style={{fontWeight:'bold'}}> + </Button>
                                        </td>
                                        <td>${val.priceDisc}</td>
                                        <td>${subtotal}</td>
                                        <td><CloseButton onClick={() =>{handleCancel(props.id)}}/></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                )} 
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
const mapDispatchToProps = (dispatch) => {
    return{
        // getProducts: () => dispatch(getProducts()),
        deleteCart: (id) => dispatch(deleteCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
 
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import "./style.scss"
import Header from '../../components/header'
import Footer from '../../components/footer'
import ChevronLeft from '../../components/font_awsome/ChevronLeft'
import ChevronRight from '../../components/font_awsome/ChevronRight'
import Itemproducts from '../../components/card_shop/products/itemProduct'
import { getProducts, addToCart } from '../../store/action/product'

const ProductPage = (props) => {
    useEffect(() => {
        props.getProducts()
    }, [])

    const handleAddToCart = (id) => {
        props.addToCart(id)
        alert('Add To Cart')
        props.history.push('/cart')
    }

    const product = Itemproducts.find((p) => p.id.toString() === props.match.params.id.toString())
    console.log(product)

    return (
        <div className="counter">
            <div className="background2"></div>
            <Header/>
            <div className="halaman2">

                <div className="page1">
                    <div className="gambar_orang"><img src={product.image} alt={product.name}/></div>
                    <div className="conten3">
                        <div className="conten3_1"><a href="#"><ChevronLeft/></a></div>
                        <div className="conten3_2"><a href="#"><ChevronRight/></a></div>
                    </div>
                </div>

                <div className="page2">
                    <div className="title_product">
                        <div className="title_product1">{product.type}</div>
                        <div className="title_product2">{product.name}
                    </div>                 
                    </div>
                    <div className="harga_product"> 
                        <div className="harga_product1">${product.priceDisc}</div>
                        <div className="harga_product2">${product.priceReal}</div>
                    </div>
                    <div className="caption_product">
                        <div className="caption_product1">{product.caption}</div>
                        <div className="caption_product2">{product.description}</div>
                    </div>
                    <div className="conten1">
                        <form action="#">
                            <div className="conten1_1">
                                <label htmlFor="size">Size:</label>
                                <select name="size" className="size">
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">large</option>
                                </select>
                            </div>
                            <div className="conten1_2">
                                <input type="submit" value="ADD TO CART" onClick={() => {handleAddToCart(product.id)}}/>
                            </div>
                        </form>
                    </div>
                    <div className="conten2">100% <span>ORIGINAL</span></div>
                </div>
            </div>
            <Footer/>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage))
// export default ProductPage


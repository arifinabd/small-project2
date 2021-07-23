import React from 'react'
import { withRouter } from 'react-router'

import './style.scss'
import ShoppingCart from '../font_awsome/shopping-cart'
import Search from '../font_awsome/Search'
    
function Header(props) {
    const handleClickCart = () => {
        props.history.push("/cart")
    }
    const handleClickHome = () => {
        props.history.push("/")
    }
    const handleClickShop = () => {
        props.history.push("/list-shop")
    }


    return (
        <div className="container">
        <div className="header">
                <div className="title_halaman3"><a onClick={() => handleClickHome()}>Your Shop Name</a></div>
                <div className="nav">
                    <div className="nav2">
                        <form className="form">
                        <input type="text" placeholder="PRODUCT"/>
                        <a href="#"><Search/></a>
                        </form>
                    </div>
                    <div className="nav1">
                        <div className="shopping"><a onClick={() => handleClickCart()}><ShoppingCart/></a></div>
                        <div className="go_back"><a onClick={() => handleClickShop()}>GO BACK</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)

import React from 'react'

import './style.scss'
import ShoppingCart from '../font_awsome/shopping-cart'
import Search from '../font_awsome/Search'

function header(props) {
    const handleClick = () => {
        props.history.push("/chart")
    }

    return (
        <div className="container">
        <div className="header">
                <div className="title_halaman3">Your Shop Name</div>
                <div className="nav">
                    <div className="nav2">
                        <input type="text" placeholder="PRODUCT"/>
                        <a href="#"><Search/></a>
                    </div>
                    <div className="nav1">
                        <div className="shopping"><a onClick={() => handleClick()}><ShoppingCart/></a></div>
                        <div className="go_back"><a href="#">GO BACK</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header

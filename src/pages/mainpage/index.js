import React from 'react'
import './style.scss'

import Footer from '../../components/footer'
import CardHome from '../../components/card_home'

function mainPage(props) {
    const handleClick = () => {
        props.history.push("/list-shop")
    }

    return (
        <div className="container">
            <div className="background1"></div>
            <div className="main_page">
                <nav className="kecil">
                    <a href="#">lates</a>
                    <a href="#">all</a>
                </nav>

                <div className="title">
                    <div className="title1">Choose <span>as you want</span></div>
                    <div className="title2">Pay <span>as you can</span></div>
                </div>

                <div className="sub_title">New Concept <span>of Online Shopping</span>
                </div>
                <div className="shop_now">
                    <button onClick={() => handleClick()}>Shop Now</button>
                </div>

                <div className="contain">
                    <div className="contain1">
                        <p>Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here.</p>
                    </div>
                    <CardHome/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default mainPage

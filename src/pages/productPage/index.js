import React from 'react'
import "./style.scss"
import orang from "./orang.jpg"

import Header from '../../components/header'
import Footer from '../../components/footer'
import ChevronLeft from '../../components/font_awsome/ChevronLeft'
import ChevronRight from '../../components/font_awsome/ChevronRight'

function product() {
    return (
        <div className="counter">
            <div className="background2"></div>
            <Header/>
            <div className="halaman2">

                <div className="page1">
                    <div className="gambar_orang"><img src={orang} alt="orang"/></div>
                    <div className="conten3">
                        <div className="conten3_1"><a href="#"><ChevronLeft/></a></div>
                        <div className="conten3_2"><a href="#"><ChevronRight/></a></div>
                    </div>
                </div>

                <div className="page2">
                    {/* <nav className="nav_product">
                        <div className="logo_shop"><a href="#"><ShoppingCart/></a></div>
                        <div className="go_back"><a href="halaman1.html">GO BACK</a></div>
                    </nav> */}
                    <div className="title_product">
                        <div className="title_product1">Color</div>
                        <div className="title_product2">Item Type / Name
                    </div>                 
                    </div>
                    <div className="harga_product"> 
                        <div className="harga_product1">$19.99</div>
                        <div className="harga_product2">$39.99</div>
                    </div>
                    <div className="caption_product">
                        <div className="caption_product1">Kacamata tampan dan berani</div>
                        <div className="caption_product2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
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
                                <input type="submit" value="ADD TO CART"/>
                            </div>
                        </form>
                    </div>
                    <div className="conten2">Mens <span>100% Cotton</span></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default product

import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import sublogo from "../assets/images/sublogo.png"
import { BiChevronDown, BiSearch } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="logo">
               <img src={logo} className="logo-img" alt="logo" />
           </div>
           <ul className="nav-items">
                <li className="nav-item">
                    <Link className="nav-link">Trang chủ</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">Dịch vụ</Link>
                    <div className="down-icon"><BiChevronDown /></div>
                    <div className="sub-menu">
                        <div className="sub-menu-item">
                            <Link className="sub-menu-item-link">
                            <div className="sub-menu-item-logo">
                                <img src={sublogo} alt="sub-logo"/>
                            </div>
                            <div className="sub-menu-item-content">
                                <h3 className="sub-menu-item-title">GHN Express</h3>
                                <p className="sub-menu-item-description">
                                    Dịch vụ giao hàng thương mại điện tử, giao hàng toàn quốc, miễn phí thu hộ COD, miễn phí giao hàng, miễn phí trả hàng.
                                </p>
                            </div>
                            </Link>
                        </div>
                        <div className="sub-menu-item">
                            <Link className="sub-menu-item-link">
                            <div className="sub-menu-item-logo">
                                <img src={sublogo} alt="sub-logo"/>
                            </div>
                            <div className="sub-menu-item-content">
                                <h3 className="sub-menu-item-title">GHN Express</h3>
                                <p className="sub-menu-item-description">
                                    Dịch vụ giao hàng thương mại điện tử, giao hàng toàn quốc, miễn phí thu hộ COD, miễn phí giao hàng, miễn phí trả hàng.
                                </p>
                            </div>
                            </Link>
                        </div>
                        <div className="sub-menu-item">
                            <Link className="sub-menu-item-link">
                            <div className="sub-menu-item-logo">
                                <img src={sublogo} alt="sub-logo"/>
                            </div>
                            <div className="sub-menu-item-content">
                                <h3 className="sub-menu-item-title">GHN Express</h3>
                                <p className="sub-menu-item-description">
                                    Dịch vụ giao hàng thương mại điện tử, giao hàng toàn quốc, miễn phí thu hộ COD, miễn phí giao hàng, miễn phí trả hàng.
                                </p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">Tin tức</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                    Bảng giá
                    </Link>
                </li>
           </ul>
                <div className="box-register">
                   <Link to="/order">Đặt giao hàng</Link>
               </div>
               <div className="box-register">
                   <Link to="/login">Đăng ký / Đăng nhập</Link>
               </div>
         
           <div className="search-bar">
               <input className="search-input" placeholder="Nhập mã đơn hàng cần tra cứu..." />
               <button className="search-button"><BiSearch className="search-icon" /></button>
           </div>
        </div>
    )
}

export default Navbar

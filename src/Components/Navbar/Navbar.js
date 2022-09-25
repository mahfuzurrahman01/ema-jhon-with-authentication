import React from 'react';
import "./Navbar.css"
import logo from "../../images/Logo.svg"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className='menu-tabs'>
                <a href="#">Order</a>
                <a href="#">Review</a>
                <a href="#">Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;
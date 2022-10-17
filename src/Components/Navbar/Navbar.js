import React from 'react';
import "./Navbar.css"
import logo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div className='menu-tabs'>
                <Link to='/'>Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/review">Review</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sing up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
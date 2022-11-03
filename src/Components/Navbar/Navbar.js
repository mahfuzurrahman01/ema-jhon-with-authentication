import React, { useContext } from 'react';
import "./Navbar.css"
import logo from "../../images/Logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    return (
        <div className='container-nav'>
            <nav className='navbar'>
                <img src={logo} alt="" />
                <div className='menu-tabs'>
                    <Link to='/'>Shop</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/review">Review</Link>
                    <Link to="/inventory">Inventory</Link>
                    {
                        user?.uid ? <button onClick={logOut}>Sign out</button> : <><Link to="/login">Login</Link>
                            <Link to="/signup">Sing up</Link></>
                    }
                </div>
                {/* <div className='name'>
                {
                    user?.uid ? <><p>{user?.email}</p><button onClick={logOut} style={{float: 'right'}}>Sign out</button></> : <p>User</p>
                }
            </div> */}
            </nav>
        </div>
    );
};

export default Navbar;
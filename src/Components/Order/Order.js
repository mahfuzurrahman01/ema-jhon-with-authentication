import React, { useState } from 'react';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderItems from '../orderedItems/OrderItems';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        removeFromDb(id)
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining)

    }
    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(item => <OrderItems key={item._id} item={item} handleRemoveItem={handleRemoveItem}></OrderItems>)
                }
                {
                    cart.length === 0 && <h2> There is no Item . Please <Link to='/'>Shop</Link> </h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <button className='review-btn'><Link to='/shipping' className='link'>Shipping</Link></button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;
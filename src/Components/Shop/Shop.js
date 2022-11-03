import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"



//count: tick
//perPage: 10
//page index:
const Shop = () => {
    const { products, count } = useLoaderData();
    const [cart, setCart] = useState([]);
    const [pages, setPages] = useState(0)
    const [size, setSize] = useState(10)
    const perPages = Math.ceil(count / size);
    //clear whole cart
    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    useEffect(() => {
        let totalItems = []

        const storedCart = getStoredCart();

        for (const id in storedCart) {
            const addedItems = products.find(item => item._id === id)
            if (addedItems) {
                const quantity = storedCart[id]
                addedItems.quantity = quantity;
                totalItems.push(addedItems)
            }
        }
        setCart(totalItems)
    }, [products])
    const handleAddToCart = (selectedItems) => {
        const exists = cart.find(items => items._id === selectedItems._id);
        let newCart = [];
        if (!exists) {
            selectedItems.quantity = 1;
            newCart = [...cart, selectedItems]
        }
        else {
            const rest = cart.filter(items => items._id !== selectedItems._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]

        }

        setCart(newCart)
        addToDb(selectedItems._id)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(item => <Products key={item._id} item={item} handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <button className='review-btn'><Link to='/order' className='link'>Review cart</Link></button>
                </Cart>
            </div>
            <div className='pagination-container'>
                <p>Showing result for page no: {pages}</p>
                <div className='pagination'>

                    {
                        [...Array(size).keys()].map(num => <button key={num} onClick={() => setPages(num)} className={pages===num && 'selected'}>{num}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;
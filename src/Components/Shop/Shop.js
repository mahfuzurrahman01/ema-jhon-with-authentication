import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"
const Shop = () => {
    const [items,setItems] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    const [cart,setCart] = useState([]);
    const handleAddToCart = (items) =>{
        // console.log(items) 
        const newCart = [...cart , items];
        setCart(newCart)
        
    }
    
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    items.map(item => <Products key ={item.id} item = {item} handleAddToCart = {handleAddToCart}></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
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
        console.log(items) 
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
                <h5>Order Summery</h5>
                <div className='details'>
                   <p>Selected Items: {cart.length}</p>
                   <p>Total Price:</p>
                   <p>Total Shipping Cost:</p>
                   <p>Tax:</p>
                </div>
                <h5>Grand Total:</h5>
            </div>
        </div>
    );
};

export default Shop;
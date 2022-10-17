import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"
const Shop = () => {

    const {products} = useLoaderData();
    const [cart, setCart] = useState([]);
    //clear whole cart
    const clearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

    useEffect(() => {
        let totalItems= []
  
        const storedCart = getStoredCart();
        
        for (const id in storedCart){
            const addedItems = products.find(item => item.id === id)
            if(addedItems){
                const quantity = storedCart[id]
                addedItems.quantity = quantity;
                totalItems.push(addedItems)
            }
        }
        setCart(totalItems)
    },[products])
    const handleAddToCart = (selectedItems) => {
        const exists = cart.find(items => items.id === selectedItems.id);
        let newCart = [];
        if(!exists){
            selectedItems.quantity = 1;
             newCart = [...cart,selectedItems]
        }
        else{
            const rest = cart.filter(items =>items.id !== selectedItems.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists]
        
        }
       
        setCart(newCart)
        addToDb(selectedItems.id)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(item => <Products key={item.id} item={item} handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart = {clearCart} cart={cart}>
                    <button className='review-btn'><Link to='/order' className='link'>Review cart</Link></button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
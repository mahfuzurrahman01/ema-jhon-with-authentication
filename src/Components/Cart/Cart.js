import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart){
       total = total + product.price;
       shipping = shipping + product.shipping;
       
    }
    let tax = (total * 0.1).toFixed(2);
    let taxNum = parseFloat(tax)
    let grandTotal = total + shipping + taxNum;
    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <div className='details'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping Cost: ${shipping}</p>
                <p>Tax: ${taxNum}</p>
            </div>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;
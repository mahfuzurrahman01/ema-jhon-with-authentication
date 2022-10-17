import React from 'react';
import Swal from 'sweetalert2'

import "./Cart.css"
const Cart = ({cart,clearCart,children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
       total = total + product.price * product.quantity;
       shipping = shipping + product.shipping;
       quantity = quantity + product.quantity;
    }
    
    let tax = (total * 0.1).toFixed(2);
    let taxNum = parseFloat(tax)
    let grandTotal = total + shipping + taxNum;




// const alertHandler = () =>{
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })
      
//       Toast.fire({
//         icon: 'success',
//         title: 'Signed in successfully'
//       })
//}

    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <div className='details'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping Cost: ${shipping}</p>
                <p>Tax: ${taxNum}</p>
            </div>
            <h5>Grand Total: ${grandTotal}</h5>
            <div className='buttons'>
                <button className='clear-btn' onClick={clearCart}>Clear cart</button>
                {/* <button className='review-btn'><Link to='/order' className='link'>Review cart</Link></button> */}
                {children} 
            </div>
        </div>
    );
};

export default Cart;
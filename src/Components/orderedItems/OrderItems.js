import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./OrderItmes.css"
const OrderItems = ({ item , handleRemoveItem }) => {
    const { id, name, img, quantity, price ,shipping } = item;
    console.log(name, img, quantity, price)
    return (
        <div className='all-item'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='item-details'>
                <div className='name-price'>
                    <p>Name: {name}</p>
                    <p>price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="dlt-btn">
                    <button onClick={() => handleRemoveItem(id)}><FontAwesomeIcon icon={faTrashAlt }></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default OrderItems;
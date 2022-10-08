import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Products.css"
const Products = (props) => {

    const { handleAddToCart, item } = props;
    const { name, price, ratings, img, seller } = item;

    return (
        <div className='product-card'>
            <img src={img} alt="item" />
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <div className='small'>
                <p><small>Menufecturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
            <footer>
                <button onClick={() => handleAddToCart(item)}>
                    <p>Add to cart</p>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </button>
            </footer>
        </div>
    );
};

export default Products;
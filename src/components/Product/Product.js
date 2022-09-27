import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({ product, handleClick }) => {

    // const { product, handleClick } = props;

    const { name, img: image, seller, price, ratings } = product

    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price:${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings}star</small></p>
            </div>
            <button onClick={() => handleClick(product)} className='btn-cart'>
                <p className='btn-text'>Ad to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};





export default Product;
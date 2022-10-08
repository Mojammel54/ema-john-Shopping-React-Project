import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Reviewitem.css';
const ReviewItem = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, img, shipping, id } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container '>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>price:${price}</small></p>
                    <p><small>shipping charge:${shipping}</small></p>
                    <p><small>quantity:{quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
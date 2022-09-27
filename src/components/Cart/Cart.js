import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let total = 0;
    let shipping = 0;

    for (const product of cart) {

        total = total + product.price
        shipping = shipping + product.shipping
    }
    const taxString = (total * 0.1).toFixed(2);
const tax=parseFloat(taxString)
    const grandTotal = total + tax + shipping
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <h6>Selected Items:{cart.length}</h6>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h5>Grand Total:${grandTotal}</h5>
        </div>
    );
};

export default Cart;
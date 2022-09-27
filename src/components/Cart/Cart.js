import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
              <h4>Order summary</h4>
                <h6>Selected Items:{cart.length}</h6>   
        </div>
    );
};

export default Cart;
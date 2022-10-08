import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../Review item/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb'

const Orders = () => {

    const { products, initialCart } = useLoaderData()   //products: products,initialCart: initialCart
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {

        const remainiing = cart.filter(prdouct => prdouct.id !== id);
        setCart(remainiing)
        removeFromDb(id)
    }

    const clearCart = () => {

        setCart([]);
        deleteShoppingCart();

    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {

                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }

                {

                    cart.length === 0 && <h2> NO Items For Review  please <Link to='/'> Shop More</Link></h2>

                }
            </div>
            <div className='cart-container'>

                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>

        </div>
    );
};

export default Orders;
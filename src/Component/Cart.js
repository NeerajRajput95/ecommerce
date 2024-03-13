import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, setTotalAmount } from '../../src/redux/actions/CartActions';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const removeCartItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    let totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
    // Update total amount in Redux store when cartItems change
    dispatch(setTotalAmount(total));
  }, [cartItems]); // Update total whenever cartItems change

  return (
    <div>
      <div className="product-list">
        {cartItems.map(product => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt={product.title} />
            <p className='price'>Price: ${product.price}</p>
            <button className='' onClick={() => removeCartItem(product.id)}>Remove</button>
          </div>
        ))}
      </div>
      <p className='total'>Total price: ${total}</p>
      <Link to='/about/cart/payment'>
        {/* Pass total as a parameter to the payment component */}
        <button className='pay' onClick={() => dispatch(setTotalAmount(total))}>Pay</button>
      </Link>
    </div>
  );
}

export default Cart;

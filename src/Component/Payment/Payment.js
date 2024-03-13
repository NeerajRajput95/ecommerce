import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Payment.css'; // Import your CSS file

const Payment = () => {
  const total = useSelector(state => state.cart.total);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p className="total-amount">Total Amount: ${total}</p>
      <div className="payment-methods">
        <h3>Select Payment Method:</h3>
        <label className="payment-method">
          <input
            type="radio"
            value="UPI"
            checked={paymentMethod === 'UPI'}
            onChange={handlePaymentMethodChange}
          />
          <span>UPI</span>
        </label>
        <label className="payment-method">
          <input
            type="radio"
            value="Card"
            checked={paymentMethod === 'Card'}
            onChange={handlePaymentMethodChange}
          />
          <span>Card</span>
        </label>
        <button >{paymentMethod}</button>
        {/* Add more payment methods as needed */}
      </div>
      {/* Additional payment form or processing logic based on selected payment method */}
    </div>
  );
}

export default Payment;

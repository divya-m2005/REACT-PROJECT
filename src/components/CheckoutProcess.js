import React, { useState } from 'react';
import './CheckoutProcess.css';

function CheckoutProcess() {
  const [form, setForm] = useState({ name: '', cardNumber: '', expiryDate: '', cvv: '' });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Payment successful! Thank you, ${form.name}.`);
  };

  return (
    <div className="checkout-process">
      <h2>Checkout Process</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name on Card:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input type="text" name="expiryDate" value={form.expiryDate} onChange={handleChange} required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" name="cvv" value={form.cvv} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default CheckoutProcess;

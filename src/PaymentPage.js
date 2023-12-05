// src/PaymentPage.js
import React, { useState } from 'react';

const PaymentPage = ({ onSelectPayment, onContinue }) => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleSelectPayment = (paymentOption) => {
    setSelectedPayment(paymentOption);
    onSelectPayment(paymentOption);
  };

  const handleContinue = () => {
    onContinue();
  };

  const containerStyle = {
    textAlign: 'center',
    margin: '50px',
    padding: '20px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Payment</h1>

      <label style={labelStyle}>
        <input
          type="radio"
          value="bankTransfer"
          checked={selectedPayment === 'bankTransfer'}
          onChange={() => handleSelectPayment('bankTransfer')}
        />
        Bank Transfer
      </label>
      <br />

      <label style={labelStyle}>
        <input
          type="radio"
          value="applePay"
          checked={selectedPayment === 'applePay'}
          onChange={() => handleSelectPayment('applePay')}
        />
        Apple Pay
      </label>
      <br />

      <label style={labelStyle}>
        <input
          type="radio"
          value="visa"
          checked={selectedPayment === 'visa'}
          onChange={() => handleSelectPayment('visa')}
        />
        Visa
      </label>
      <br />

      <button type="button" onClick={handleContinue} style={buttonStyle}>
        Continue
      </button>
    </div>
  );
};

export default PaymentPage;

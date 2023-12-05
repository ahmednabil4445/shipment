// src/ServiceSelectionPage.js
import React, { useState } from 'react';

const ServiceSelectionPage = ({ onServiceSelect }) => {
  const [location, setLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleServiceSelection = () => {
    if (selectedOption === 'storeOwner' && (location === 'Abha' || location === 'Khamis Mushait')) {
      onServiceSelect('Store Owners - Shipping and Delivery');
    } else if (selectedOption === 'personal') {
      onServiceSelect('Personal - Shipping and Delivery');
    } else {
      alert('Invalid selection. Please check your options and location.');
    }
    
  };


  const pageStyle = {
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

  const inputStyle = {
    margin: '5px 0',
    padding: '10px',
    boxSizing: 'border-box',
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
    <div style={pageStyle}>
      <h1>Service Selection</h1>
      <p>Select your service:</p>
      <label style={labelStyle}>
        <input
          type="radio"
          value="storeOwner"
          checked={selectedOption === 'storeOwner'}
          onChange={() => setSelectedOption('storeOwner')}
        />
        Shipping and Delivery for Store Owners
      </label>
      <br />
      <label style={labelStyle}>
        <input
          type="radio"
          value="personal"
          checked={selectedOption === 'personal'}
          onChange={() => setSelectedOption('personal')}
        />
        Personal Shipping and Delivery
      </label>
      <br />
      {selectedOption === 'storeOwner' && (
        <div>
          <p>Enter your location:</p>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={inputStyle}
            placeholder="Location (e.g., Abha, Khamis Mushait)"
          />
        </div>
      )}
      <br />
      <button type="button" onClick={handleServiceSelection} style={buttonStyle}>
        Continue
      </button>
    </div>
  );
};

export default ServiceSelectionPage;

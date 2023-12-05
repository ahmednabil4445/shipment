// src/ShipmentDetailsPage.js
import React, { useState } from 'react';

const ShipmentDetailsPage = ({ onSaveDetails, onContinue }) => {
  const [shipmentDetails, setShipmentDetails] = useState({
    description: '',
    numberOfPackages: '',
    weight: '',
  });

  const handleSaveDetails = () => {
    onSaveDetails(shipmentDetails);
    alert('Shipment details saved!');
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

  const inputStyle = {
    padding: '10px',
    width: '100%',
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
    <div style={containerStyle}>
      <h1>Shipment Details</h1>

      <label style={labelStyle}>
        Description:
        <input
          type="text"
          value={shipmentDetails.description}
          onChange={(e) => setShipmentDetails({ ...shipmentDetails, description: e.target.value })}
          style={inputStyle}
        />
      </label>
      <br />

      <label style={labelStyle}>
        Number of Packages:
        <input
          type="number"
          value={shipmentDetails.numberOfPackages}
          onChange={(e) =>
            setShipmentDetails({ ...shipmentDetails, numberOfPackages: e.target.value })
          }
          style={inputStyle}
        />
      </label>
      <br />

      <label style={labelStyle}>
        Weight of Packages:
        <input
          type="text"
          value={shipmentDetails.weight}
          onChange={(e) => setShipmentDetails({ ...shipmentDetails, weight: e.target.value })}
          style={inputStyle}
        />
      </label>
      <br />

      <button type="button" onClick={handleSaveDetails} style={buttonStyle}>
        Save Shipment Details
      </button>

      <br />

      <button type="button" onClick={handleContinue} style={buttonStyle}>
        Continue
      </button>
    </div>
  );
};

export default ShipmentDetailsPage;

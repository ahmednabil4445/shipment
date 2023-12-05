// src/SenderReceiverInfoPage.js
import React, { useState } from 'react';

const SenderReceiverInfoPage = ({ onSaveInfo, onContinue }) => {
  const [senderInfo, setSenderInfo] = useState({
    name: '',
    mobileNumber: '',
    city: '',
    address: '',
  });

  const [receiverInfo, setReceiverInfo] = useState({
    name: '',
    mobileNumber: '',
    city: '',
    address: '',
  });

  const handleSaveSenderInfo = () => {
    onSaveInfo('sender', senderInfo);
    alert('Sender information saved for future use!');
  };

  const handleSaveReceiverInfo = () => {
    onSaveInfo('receiver', receiverInfo);
    alert('Receiver information saved for future use!');
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

  const sectionStyle = {
    marginBottom: '20px',
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
      <h1>Sender and Receiver Information</h1>

      <div style={sectionStyle}>
        <h2>Sender Information</h2>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            value={senderInfo.name}
            onChange={(e) => setSenderInfo({ ...senderInfo, name: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Mobile Number:
          <input
            type="text"
            value={senderInfo.mobileNumber}
            onChange={(e) => setSenderInfo({ ...senderInfo, mobileNumber: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          City:
          <input
            type="text"
            value={senderInfo.city}
            onChange={(e) => setSenderInfo({ ...senderInfo, city: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Address:
          <input
            type="text"
            value={senderInfo.address}
            onChange={(e) => setSenderInfo({ ...senderInfo, address: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <button type="button" onClick={handleSaveSenderInfo} style={buttonStyle}>
          Save Sender Info
        </button>
      </div>

      <div style={sectionStyle}>
        <h2>Receiver Information</h2>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            value={receiverInfo.name}
            onChange={(e) => setReceiverInfo({ ...receiverInfo, name: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Mobile Number:
          <input
            type="text"
            value={receiverInfo.mobileNumber}
            onChange={(e) => setReceiverInfo({ ...receiverInfo, mobileNumber: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          City:
          <input
            type="text"
            value={receiverInfo.city}
            onChange={(e) => setReceiverInfo({ ...receiverInfo, city: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          Address:
          <input
            type="text"
            value={receiverInfo.address}
            onChange={(e) => setReceiverInfo({ ...receiverInfo, address: e.target.value })}
            style={inputStyle}
          />
        </label>
        <br />
        <button type="button" onClick={handleSaveReceiverInfo} style={buttonStyle}>
          Save Receiver Info
        </button>
      </div>

      <button type="button" onClick={handleContinue} style={buttonStyle}>
        Continue
      </button>
    </div>
  );
};

export default SenderReceiverInfoPage;

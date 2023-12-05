// src/App.js
import React, { useState } from 'react';
import ProjectPage from './ProjectPage';
import LoginPage from './LoginPage';
import ServiceSelectionPage from './ServiceSelectionPage';
import SenderReceiverInfoPage from './SenderReceiverInfoPage';
import ShipmentDetailsPage from './ShipmentDetailsPage';
import './App.css';
import PaymentPage from './PaymentPage';
import InvoiceShippingBillPage from './InvoiceShippingBillPage';
import { generateTrackingNumber } from './utils';


function App() {
  const [currentPage, setCurrentPage] = useState('project'); // 'project', 'login', 'serviceSelection', 'senderReceiverInfo', 'shipmentDetails', 'payment', or 'invoiceShippingBill'
  const [selectedService, setSelectedService] = useState('');
  const [savedInfo, setSavedInfo] = useState({
    sender: null,
    receiver: null,
  });
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  const [shippingBillData, setShippingBillData] = useState({
    trackingNumber: generateTrackingNumber(), // Assume there's a function to generate a unique tracking number
  });

  const goToLoginPage = () => {
    setCurrentPage('login');
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentPage('senderReceiverInfo');
  };

  const handleSaveInfo = (type, info) => {
    setSavedInfo((prevSavedInfo) => ({
      ...prevSavedInfo,
      [type]: info,
    }));
  };

  const handleSaveDetails = (details) => {
    setShipmentDetails(details);
  };

  const handleSelectPayment = (paymentOption) => {
    setSelectedPayment(paymentOption);
  };

  const handleGenerateInvoice = () => {
    // Implement your logic to generate invoice data
    const generatedInvoiceData = {
      sender: savedInfo.sender,
      receiver: savedInfo.receiver,
      shipmentDetails: shipmentDetails,
      paymentOption: selectedPayment,
    };
    setInvoiceData(generatedInvoiceData);
  };

  const handleDownloadPrint = (documentType) => {
    // Implement your logic for downloading or printing the document
    alert(`Downloading/Printing ${documentType}...`);
  };

  const handleContinue = () => {
    setCurrentPage('invoiceShippingBill');
    // alert('Continue button clicked!');
  };

  return (
    <div className="App">
      {currentPage === 'project' && <ProjectPage goToLoginPage={goToLoginPage} />}
      {currentPage === 'login' && <LoginPage onLoginClick={() => setCurrentPage('serviceSelection')} />}
      {currentPage === 'serviceSelection' && (
        <ServiceSelectionPage selectedService={selectedService} onServiceSelect={handleServiceSelect} />
      )}
      {currentPage === 'senderReceiverInfo' && (
        <SenderReceiverInfoPage onSaveInfo={handleSaveInfo} onContinue={() => setCurrentPage('shipmentDetails')} />
      )}
      {currentPage === 'shipmentDetails' && (
        <ShipmentDetailsPage onSaveDetails={handleSaveDetails} onContinue={() => setCurrentPage('payment')} />
      )}
      {currentPage === 'payment' && (
        <PaymentPage onSelectPayment={handleSelectPayment} onContinue={handleContinue} />
      )}
      {currentPage === 'invoiceShippingBill' && (
        <InvoiceShippingBillPage
          invoiceData={invoiceData}
          shippingBillData={shippingBillData}
          onDownload={handleDownloadPrint}
          onPrint={handleDownloadPrint}
        />
      )}
         <a
        href="https://api.whatsapp.com/send?phone=+966507368133&text=Hi"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>

    </div>
  );
}

export default App;

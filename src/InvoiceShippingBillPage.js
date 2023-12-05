// src/InvoiceShippingBillPage.js
import React from 'react';

const InvoiceShippingBillPage = ({ invoiceData, shippingBillData, onDownload, onPrint }) => {
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

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        margin: '10px 5px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };
    const preStyle = {
        textAlign: 'left',
        backgroundColor: '#f8f9fa', // Light gray background
        padding: '10px',
        borderRadius: '5px',
        overflowX: 'auto',
    };

    // const handleDownload = (documentType) => {
    //     const dataToDownload = documentType === 'invoice' ? JSON.stringify(invoiceData, null, 2) : '';
    //     const blob = new Blob([dataToDownload], { type: 'application/json' });
    //     const url = URL.createObjectURL(blob);

    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = `${documentType}_data.json`;
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);

    //     // Clean up the URL object to free resources
    //     URL.revokeObjectURL(url);
    // };
    const handleDownload = (documentType) => {
        let dataToDownload = '';

        if (documentType === 'invoice' && invoiceData !== null) {
            dataToDownload = JSON.stringify(invoiceData, null, 2);
        } else if (documentType === 'shippingBill') {
            dataToDownload = JSON.stringify(shippingBillData, null, 2);
        }
        const blob = new Blob([dataToDownload], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${documentType}_data.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Clean up the URL object to free resources
        URL.revokeObjectURL(url);
    };
    const handlePrint = (documentType) => {
        let dataToPrint = '';

        if (documentType === 'invoice' && invoiceData !== null) {
            dataToPrint = JSON.stringify(invoiceData, null, 2);
        } else if (documentType === 'shippingBill') {
            dataToPrint = JSON.stringify(shippingBillData, null, 2);
        }

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`<pre>${dataToPrint}</pre>`);
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div style={containerStyle}>
            <h1>Invoice and Shipping Bill</h1>

            <div style={sectionStyle}>
                <h2>Invoice</h2>
                {/* Display invoice details here */}
                {invoiceData ? (
                    <pre style={preStyle}>{JSON.stringify(invoiceData, null, 2)}</pre>
                ) : (
                    <p>No invoice data available.</p>
                )}
            </div>

            <div style={sectionStyle}>
                <h2>Shipping Bill</h2>
                <p>Tracking Number: {shippingBillData.trackingNumber}</p>
                {/* Display shipping bill details here */}
                <pre style={preStyle}>{JSON.stringify(shippingBillData, null, 2)}</pre>
            </div>

            <button type="button" onClick={() => handleDownload('invoice')} style={buttonStyle}>
                Download Invoice
            </button>
            <button type="button" onClick={() => handlePrint('invoice')} style={buttonStyle}>
                Print Invoice
            </button>

            <button type="button" onClick={() => handleDownload('shippingBill')} style={buttonStyle}>
                Download Shipping Bill
            </button>
            <button type="button" onClick={() => handlePrint('shippingBill')} style={buttonStyle}>
                Print Shipping Bill
            </button>
        </div>
    );
};

export default InvoiceShippingBillPage;
// src/LoginPage.js
import React, { useState } from 'react';
// import twilio from 'twilio';
import smsService from './smsService';
// const accountSid = 'AC61420e1118d5836eb589835fb8b33e1b'; // Replace with your Twilio Account SID
// const authToken = 'b5857d10a946d26f60027b647ba9af51'; // Replace with your Twilio Auth Token
// const client = twilio(accountSid, authToken);

const LoginPage = ({ onLoginClick }) => {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [resetPassword, setResetPassword] = useState(false);
    const [resetToken, setResetToken] = useState('');
    const [language, setLanguage] = useState('english'); // Default language is English

    // const sendVerificationCode = async () => {
    //     try {
    //         // Replace 'to' with the actual mobile number
    //         const to = '+1234567890'; // Replace with the registered mobile number
    //         const generatedCode = Math.floor(1000 + Math.random() * 9000);

    //         // Send verification code via Twilio SMS
    //         const message = await client.messages.create({
    //             body: `Your verification code is: ${generatedCode}`,
    //             from: '01221658500', // Replace with your Twilio phone number
    //             to,
    //         });

    //         alert(`Verification code sent to ${to}: ${generatedCode}`);
    //     } catch (error) {
    //         console.error('Error sending verification code:', error.message);
    //         alert('Error sending verification code. Please try again.');
    //     }
    // };
    const handleLogin = () => {
        // Simulate sending a verification code to the registered mobile number
        // and then verifying it. For a real application, you would make API calls
        // to handle these operations.
        const generatedCode = smsService.sendVerificationCode(mobileNumber);
        // Simulate sending a verification code (in a real app, this would be done asynchronously)
        // const generatedCode = Math.floor(1000 + Math.random() * 9000);
        alert(`Verification code sent to ${mobileNumber}: ${generatedCode}`);

        // For the sake of this example, let's assume the user entered the correct code
        const enteredCode = parseInt(prompt('Enter the verification code:'), 10);

        if (!isNaN(enteredCode) && enteredCode === generatedCode) {
            alert('Verification successful! User logged in.');
            // Simulate generating a reset token (in a real app, this would be done server-side)
            const generatedResetToken = Math.random().toString(36).substring(7);
            setResetToken(generatedResetToken);
            setResetPassword(true);
            // Navigate to ServiceSelectionPage on successful login
            onLoginClick();
        } else {
            alert('Incorrect verification code. Please try again.');
        }
    };

    const handleResetPassword = () => {
        // Simulate updating the user's password (in a real app, this would be done server-side)
        alert(`Password reset for ${name}. Token: ${resetToken}`);
        setResetPassword(false);
    };
    const handleLanguageToggle = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'arabic' : 'english'));
    };
    const formStyle = {
        textAlign: 'center',
        margin: '50px',
        padding: '20px',
        border: '2px solid #007bff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
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
        <div>
            <h1>{language === 'english' ? 'Login Page' : 'صفحة تسجيل الدخول'}</h1>
            <form style={formStyle}>
                <label>
                    {language === 'english' ? 'Name:' : 'الاسم:'}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <br />
                <label>
                    {language === 'english' ? 'Mobile Number:' : 'رقم الهاتف المحمول:'}
                    <input
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        style={inputStyle}
                    />
                </label>
                <br />
                {resetPassword && (
                    <>
                        <label>
                            {language === 'english' ? 'Verification Code:' : 'رمز التحقق:'}
                            <input
                                type="text"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                style={inputStyle}
                            />
                        </label>
                        <br />
                    </>
                )}
                <button type="button" onClick={handleLogin} style={buttonStyle}>
                    {language === 'english' ? 'Login' : 'تسجيل الدخول'}
                </button>
                <br />
                <button type="button" onClick={handleResetPassword} style={buttonStyle}>
                    {language === 'english' ? 'Reset Password' : 'إعادة تعيين كلمة المرور'}
                </button>
                <br />
                <button type="button" onClick={handleLanguageToggle} style={buttonStyle}>
                    {language === 'english' ? 'Switch to Arabic' : 'تبديل إلى الإنجليزية'}
                </button>
                {/* <button type="button" onClick={sendVerificationCode} style={buttonStyle}>
                    {language === 'english' ? 'Send Verification Code' : 'إرسال رمز التحقق'}
                </button> */}
            </form>
        </div>
    );
};

export default LoginPage;

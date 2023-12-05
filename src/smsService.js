// src/smsService.js
const smsService = {
    sendVerificationCode: (mobileNumber) => {
      // Simulate sending a verification code (in a real app, this would be done through a third-party service)
      const generatedCode = Math.floor(1000 + Math.random() * 9000);
      console.log(`Verification code sent to ${mobileNumber}: ${generatedCode}`);
      return generatedCode;
    },
  };
  
  export default smsService;
  
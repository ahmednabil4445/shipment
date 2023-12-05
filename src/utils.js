export const generateTrackingNumber = () => {
    return Math.random().toString(36).substr(2, 10); // Just a simple example, you may want a more sophisticated implementation
  };
  
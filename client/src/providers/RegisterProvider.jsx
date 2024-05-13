// providers/RegisterProvider.js
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import registerContext from '../contexts/registerContext.js';

const RegisterProvider = ({ children }) => {
  const [register, setRegister] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    async function verifyToken() {
      if (!token) {
        return;
      }

      try {
        const response = await fetch('http://localhost:9001/verify', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const res = await response.json();
          switch (res.err_code) {
            case 'SESSION_EXPIRED':
              toast.error('Session expired!');
              break;
            case 'INVALID_TOKEN':
              toast.error('Invalid token!');
              break;
            default:
              toast.error('Unexpected error occurred!');
              break;
          }
          setToken(null);
          setRegister(null);
          return;
        }

        const res = await response.json();
        setToken(token);
        setRegister(res);
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred!');
        setToken(null);
        setRegister(null);
      }
    }

    verifyToken();
  }, []);

  return (
    <registerContext.Provider value={{ register, token }}>
      {children}
    </registerContext.Provider>
  );
};

export default RegisterProvider;

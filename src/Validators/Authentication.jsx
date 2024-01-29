import React, { createContext, useContext, useState, useEffect } from 'react';

import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [values,setValues]=useState({})
  console.log(values)
  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Adjust the URL to your backend's verification endpoint
        const response = await axios.get('http://localhost:8000/', { withCredentials: true });
        if (response.data.Status === "Success") {
          
          setValues(response.data)
          }

      } catch (error) {
        console.error("Error verifying auth status", error);
        setIsAuthenticated(false)
        
      }
    };

    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated ,values}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React ,{useEffect}from 'react'
import { useAuth } from './Authentication'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
const ProtectedRoutes = ({children}) => {
  const {isAuthenticated,setIsAuthenticated} = useAuth();
  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Adjust the URL to your backend's verification endpoint
        const response = await axios.get('http://localhost:8000/', { withCredentials: true });
        if (response.data.Status === "Success") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying auth status", error);
        setIsAuthenticated(false);
      }
    };

    verifyUser();
  }, []);
  if(!isAuthenticated){
    return <Navigate to="/"/>;
  }
 
  return children;
}

export default ProtectedRoutes
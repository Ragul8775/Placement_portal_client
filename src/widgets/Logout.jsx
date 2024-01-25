import React from 'react'
import axios from 'axios'
import { redirect,useNavigate} from 'react-router-dom';
import { useAuth } from '../Validators/Authentication';

const Logout = () => {
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate()
    const handleDelete = async ()=>{
      try {
        await axios.post('http://localhost:8000/logout');
        setIsAuthenticated(false);
        navigate('/');
      }  catch (error) {
            console.error("Logout failed", error);
            // Handle logout error here
        }
    }
  return (
    <button
    onClick={handleDelete}
     className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Sign-Out</button>
  )
}

export default Logout
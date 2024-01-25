import React, { useEffect, useState } from 'react';
import Home from '../components/Home';
import { MdOutlineDangerous } from "react-icons/md";
import axios from 'axios';

const Homepage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Function to fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8000', { withCredentials: true });
        if (response.data.Status === "Success") {
          setName(response.data.name);
          setEmail(response.data.mail);
        } else {
          console.log("Failed to fetch user details: ", response.data.Error);
        }
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <Home />
      {/* Display user details */}
      <div className='info'>
        <h1>Welcome, {name}</h1>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Homepage;
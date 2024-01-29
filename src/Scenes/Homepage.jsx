import React, { useEffect, useState } from "react";
import UserProfile from "../widgets/UserProfile";
import { Navbar } from "../components/Navbar";
/* import { MdOutlineDangerous } from "react-icons/md";
import axios from "axios";
import { useAuth } from "../Validators/Authentication"; */

const Homepage = () => {
  /*   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {setIsAuthenticated} = useAuth()
  useEffect(() => {
    // Function to fetch user details
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8000', { withCredentials: true });
        if (response.data.Status === "Success") {
          setIsAuthenticated(true)
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
 */
  return (
    <div className="flex flex-col justify-center items-center gap-2 m-4">
      <div>
        <Navbar />
      </div>
      <div className="w-full flex justify-end">
        <UserProfile />
      </div>
    </div>
  );
};

export default Homepage;

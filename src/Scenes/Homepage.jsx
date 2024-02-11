import React, { useEffect, useState } from "react";
import UserProfile from "../widgets/UserProfile";
import { Navbar } from "../components/Navbar";

const Homepage = () => {
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

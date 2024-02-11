import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import Logo from "../assets/logo.png";
import Logout from "../widgets/Logout";
export const Navbar = () => {
  let Links = [
    { id: 1, name: "Student Details", link: "/student_details" },
    { id: 2, name: "FA Details", link: "/fa_details" },
    { id: 3, name: "Company", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="mb-[4.7rem]">
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="sm:flex items-center justify-between bg-white py-2 sm:px-10 px-7">
          {/* logo section */}
          <div className="font-bold text-xl cursor-pointer flex items-center gap-1">
            <img src={Logo} className="w-14" />
            <div>
              <h2 className="font-bold text-blue-800">SRM</h2>
              <h2 className="opacity-70 text-sm">Placement Portal</h2>
            </div>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer sm:hidden w-7 h-7"
          >
            {open ? (
              <FaXmark className="text-3xl text-gray-800" />
            ) : (
              <IoReorderThree className="text-3xl text-gray-800" />
            )}
          </div>
          {/* linke items */}
          <ul
            className={`sm:flex sm:items-center sm:pb-0 pb-12 absolute sm:static bg-white sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-18" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                className="sm:ml-8 sm:my-0 my-7 font-semibold text-sm "
                key={link.id}
              >
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Logout />
          </ul>
          {/* button */}
        </div>
      </div>
    </div>
  );
};

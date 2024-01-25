import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import Logo from "../assets/logo.png"
import Logout from '../widgets/Logout';
export const Navbar = () => {
    let Links =[
        {id:1,name:"HOME",link:"/"},
        {id:2,name:"SERVICE",link:"/"},
        {id:3,name:"ABOUT",link:"/"},
        {id:4,name:"CONTACT",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
               <img src={Logo} className='w-14'/>
               <div>
                <h2 className='font-bold text-blue-800'>SRM</h2>
                <h2 className='opacity-70 text-md'>Placement Portal</h2>
                </div>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <FaXmark/> : <IoReorderThree />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.id}>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                <Logout/>
            </ul>
            {/* button */}
           </div>
        </div>
    );

}

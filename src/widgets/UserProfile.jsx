import React from 'react'
import { useAuth } from '../Validators/Authentication'
import profile from "../assets/profile.png"

const UserProfile = () => {
  const {values} = useAuth()
  
  
  return (
   <div className="py-6 px-6 max-w-sm max-auto bg-white border ronded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img src={profile} className='block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0'/>
    <div className='space-y-0.5'>
      <p className='text-lg text-slate-500 font-semibold'>
       {values.netid}
      </p>
      <p className='text-slate-500 font-semibold'>
      {values.mail}
      </p>
      
    </div>
   </div>
  )
}

export default UserProfile
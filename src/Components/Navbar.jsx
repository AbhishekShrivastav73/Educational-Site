import React from 'react'
import { RiMenu3Line } from "react-icons/ri";



const Navbar = ({users}) => {
  console.log(users)
  return (
    <nav className='flex items-center justify-between w-full px-4 py-3 sticky top-0'>
        <h1 className='text-[#8B62FC] text-lg font-bold'>Front-End Mastery</h1>
        <span className='text-[#8B62FC] text-2xl flex items-center gap-3'>
            <p className='text-black text-sm border border-black px-4 py-2 rounded-lg'>Hey!</p>
            <RiMenu3Line />
        </span>
    </nav>
  )
}

export default Navbar
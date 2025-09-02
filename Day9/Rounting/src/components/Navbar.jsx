import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between'>
        <h3>
       LOGO </h3>
       <div className=' flex gap-2.5'>
        <Link to="/home">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/profile">Profile</Link>
       </div>
        </div>
  )
}

export default Navbar
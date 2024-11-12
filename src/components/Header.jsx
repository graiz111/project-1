import React from 'react'
import Logo from './Logo'
import { RiSearchEyeLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
   <header className='h-16 shadow-md'>
    <div className='h-full container mx-auto flex items-center px-4 justify-between'>
      <div >
        <Logo />
      </div>
      <div className=' hidden sm:flex items-center w-full max-w-sm '>
        
          <input type='text' placeholder='search a product here....' className='w-full outline-none pl-3 border rounded-l-full h-8 focus-within:shadow' />
          <div className=' text-lg  h-8 w-12 bg-red-500 h-15 flex items-center justify-center rounded-r-full  focus-within:shadow '>
          <RiSearchEyeLine /> 
          </div>

       
        
      </div>
      <div className='flex justify-center items-center gap-4'>
        <div className='text-3xl cursor-pointer'>
          <CgProfile />
        </div>
        <div className='text-2xl cursor-pointer relative '>
          <span><FaShoppingCart /></span>
          <div className='bg-red-500 text-black w-4 h-4 rounded-full flex items-center justify-center absolute -top-2 -right-1 '>
            <p className='text-sm'>0</p>
          </div>
        </div>
        <div className='mr-3'>
          <button className='bg-green-300 px-3 py-1 rounded-full transform hover:scale-105 transition-transform duration-200 ease-in-out hover:font-bold'>
            Login
          </button>
        </div>

      </div>


  </div>
   </header>
  )
}

export default Header

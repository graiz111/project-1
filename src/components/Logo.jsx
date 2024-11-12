import React from 'react'
import { TbSquareRoundedLetterS } from "react-icons/tb";

const Logo = ({w,h}) => {
  return (
    <div className='flex items-center '>
        <TbSquareRoundedLetterS className='w-10 h-6  ' />
        < h3 className=' hidden sm:block text-4xl font-bold'>Simplify</h3>
    </div>
  )
}

export default Logo

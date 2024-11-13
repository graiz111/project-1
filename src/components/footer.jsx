import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const footer = () => {
  return (
    <footer className='bg-slate-400  p-6 flex flex-col md:flex-row'>
      <p className="mt-4 pl-4">&copy; 2024 Your Company. All rights reserved.</p>
     <div className='container mx-auto p-4'>
      <p className='text-center font-bold'>cart app by grace</p>
     </div>
     <div>
     <div className="container mx-auto text-center">
                <p className="mb-4">Follow us on :</p>
                <div className="flex justify-center space-x-6 px-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                
            </div>
     </div>
    </footer>
  )
}

export default footer

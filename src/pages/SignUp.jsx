import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import loginimage from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
  const [ showPassword,setShowPassword ]=useState(false)
  const [showConfirmPassword,setShowConfirmPassword]=useState(false)
const [data,setData]=useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:"",
      profilepic:""
})
const handleOnChange=(e)=>{
  const {name,value}=e.target

    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
}
const handleSubmit=(e)=>{
  e.preventDefault()

}






  return (
    <section id='signup'>
        <div className='mx-auto container p-4'>
            <div className=' bg-white p-2 w-full max-w-md mx-auto py-5'>
                <div className='max-w-20 max-h-20 mx-auto relative overflow-hidden rounded-full'>
                  <div>
                    <img src={loginimage} alt="login icon" />

                  </div>
                  <div className='rounded-full text-center pb-4 pt-2 bg-slate-200 absalute bottom-1 '>
                    <p>Upload Image</p>
                  </div>
                </div>
                <form className='pt-10 flex flex-col gap-2' onSubmit={handleSubmit}>
                 <div className='grid'>
                    <label>Name:</label>
                    <div className='bg-slate-100 p-2'>
                    <input type="text"  
                           placeholder='enter your name..' 
                           name='name'
                           value={data.name}
                           onChange={handleOnChange}
                           className='w-full h-full outline-none  bg-transparent'/>
                    </div>
                  </div>
                  <div className='grid'>
                    <label>Email:</label>
                    <div className='bg-slate-100 p-2'>
                    <input type="email"  
                           placeholder='enter a valid email..' 
                           name='email'
                           value={data.email}
                           onChange={handleOnChange}
                           className='w-full h-full outline-none  bg-transparent'/>
                    </div>
                  </div>
                  <div >
                    <label>Password:</label>
                    <div className='bg-slate-100 p-2 flex'>
                        <input type={showPassword ? "text" : "password"}  
                               placeholder='enter password..' 
                               name='password'
                               value={data.password}
                               onChange={handleOnChange}
                               className='w-full h-full outline-none bg-transparent '/>
                        <div className=' cursor-pointer text-xl ' onClick={()=>setShowPassword((preve)=>!preve)}>
                          <span>
                            {
                              showPassword ? 
                                (<FaEyeSlash/>)
                              :
                                (<FaEye/>)
                            }

                          </span>
                        </div>
                    </div>
                    <div >
                     <label>Confirm Password:</label>
                     <div className='bg-slate-100 p-2 flex'>
                        <input type={showConfirmPassword ? "text" : "password"}  
                               placeholder='confirm password..' 
                               name='confirmpassword'
                               value={data.confirmpassword}
                               onChange={handleOnChange}
                               className='w-full h-full outline-none bg-transparent '/>
                        <div className=' cursor-pointer text-xl ' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                          <span>
                            {
                              showPassword ? 
                                (<FaEyeSlash/>)
                              :
                                (<FaEye/>)
                            }

                          </span>
                        </div>
                      </div>
                   </div>
                  </div>
                  <button className=' bg-red-400 text-white px-6 py-3 w-full max-w-[150px] rounded-full hover:scale-110 transition-all hover:text-black mx-auto block mt-4'>SignUp</button>
                  <p className='pt-3 '>Already have an account?..<Link to={"/login"} className='hover:underline hover:text-blue-600'>login</Link></p>

                </form>

            </div>

        </div>
    </section>
  )
}

export default SignUp
import React, { useState } from 'react'
import loginimage from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Login = () => {

const [ showPassword,setShowPassword ]=useState(false)
const [data,setData]=useState({

      email:"",
      password:""
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
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className=' bg-white p-2 w-full max-w-md mx-auto py-5'>
                <div className='max-w-20 max-h-20 mx-auto'>
                    <img src={loginimage} alt="login icon" />
                </div>
                <form className='pt-10 flex flex-col gap-2' onSubmit={handleSubmit}>
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
                  </div>
                  <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-blue-700 p-3'>
                  Forgot password?.. 
                  </Link>
                  <button className=' bg-red-400 text-white px-6 py-3 w-full max-w-[150px] rounded-full hover:scale-110 transition-all hover:text-black mx-auto block mt-4'>Login</button>
                  <p className='pt-3 '>Don't have an account?..<Link to={"/signup"} className='hover:underline hover:text-blue-600'>SignUp</Link></p>

                </form>

            </div>

        </div>
    </section>
  )
}

export default Login
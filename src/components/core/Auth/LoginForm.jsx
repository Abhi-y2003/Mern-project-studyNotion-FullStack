import React, { useState } from 'react'

const LoginForm = () => {

    const [formData, setFormData] = useState(
        {
            email:"",
            password:""
        }
    )

    const [showPassword, setShowPassword] = useState(false)

    const {email, password} = formData

    const changeHandler = (event) =>{
        setFormData( (prevData) => ( {
            ...prevData,
            [event.target.name] : event.target.value
        }))
    }

    const submitHandler = (event) =>{
        event.preventDefault()


    }
  
  
  
    return (
        <form className='flex flex-col' onSubmit={submitHandler()}>

            <label className='text-richblack-5'>
                Email Address <sup className='text-pink-300'>*</sup>
            

            <input 
            required 
            type='email' 
            placeholder='Enter Email' 
            name='email' 
            value={email}
            onChange={changeHandler()}
            className='className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5
             shadow inset-0 -mb-1 shadow-white bg-opacity-18'> 


            </input>

            </label>


            <label className='text-richblack-5 relative'>
                Password <sup className='text-pink-300'>*</sup>
            

            <input 
            required 
            type='text' 
            placeholder='Enter Password' 
            name='password' 
            value={password}
            onChange={changeHandler()}
            className='className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5
             shadow inset-0 -mb-1 shadow-white bg-opacity-18'> 
            </input>

            <span onClick={ ()=> setShowPassword((prev)= !prev)}
             className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
                {
                    showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                    : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)
                }
            </span>
            <Link to="/forgot-password">
                <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
                  Forgot Password
                </p>
            </Link>
            </label>
            <button
            type="submit"
            className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
                Sign In
            </button>
 


        </form>
  )
}

export default LoginForm
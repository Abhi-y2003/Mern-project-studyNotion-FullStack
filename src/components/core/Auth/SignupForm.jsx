import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Tab from '../../common/Tab'

const SignupForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, email, password, confirmPassword } = formData

    const changeHandler = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }

    const onSubmit = (event) =>{
        event.preventDefault()

        if(password !== confirmPassword )
        toast.error("Passwords Do Not Match")
        return 
    }

    const signupData = {
        ...formData,
        accountType
    }

    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))


    // Reset
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
      setAccountType(ACCOUNT_TYPE.STUDENT)

      // data to pass to Tab component
  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]


  return (
    <div>

        {/* tab */}

        <Tab tabData={tabData} field={accountType} setField={setAccountType}/>



        {/* form */}

        <form>

            <div className='flex gap-3'>
            <label className='text-richblack-5'>
                First Name <sup className='text-pink-300'>*</sup>

                <input 
                required
                type='text'
                placeholder='Enter First Name'
                name='firstName'
                value={firstName}
                onChange={changeHandler()}
                className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5
                shadow inset-0 -mb-1 shadow-white bg-opacity-18'
                >
                </input>
            </label>

            <label className='text-richblack-5'>
                Last Name <sup className='text-pink-300'>*</sup>

                <input 
                required
                type='text'
                placeholder='Enter Last Name'
                name='lastName'
                value={lastName}
                onChange={changeHandler()}
                className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5
                shadow inset-0 -mb-1 shadow-white bg-opacity-18'
                >
                </input>
            </label>
            </div>

            <label className='text-richblack-5'>
                Email address <sup className='text-pink-300'>*</sup>

                <input
                required
                type='email'
                placeholder='Enter Email'
                name='email'
                value={email}
                onChange={changeHandler()}
                className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5
                shadow inset-0 -mb-1 shadow-white bg-opacity-18'>

                </input>
            </label>

            <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={changeHandler()}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={changeHandler()}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>

        </form>




    </div>
  )
}

export default SignupForm
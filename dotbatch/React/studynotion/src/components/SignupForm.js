import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({
        firstName:"",lastName:"",email:"",password:"",confirmPassword:""
    })

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [accountType,setAccountType]=useState('student');

    const navigate=useNavigate();

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }

        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData={
            ...formData
        }

        const finalData={
            ...accountData,accountType
        }

        console.log("Printing Final Account Data");
        console.log(finalData);

        navigate("/dashboard");
    }

  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button onClick={()=>setAccountType("student")} className={`${accountType==="student"?"bg-black text-white" :"bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
            <button
             onClick={()=>setAccountType("instructor")} className={`${accountType==="instructor"?"bg-black text-white" :"bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
        </div>

        <form onSubmit={submitHandler} >
        {/* First name && Last name */}
        <div className='flex gap-x-4 justify-between mt-[20px]'>
            <label className='w-full' ><p className='text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5'>First Name<sup className='text-pink-200'>*</sup></p>
                <input 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
                type='text' 
                required name='firstName' 
                onChange={changeHandler} 
                placeholder='Enter First Name' 
                value={formData.firstName}/>
            </label>

            <label className='w-full'><p className='text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='text' required name='lastName' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastName}/>
            </label>

        </div>
        {/* Email Address */}
        <div className='mt-[20px]'>
        <label className='w-full '><p className='text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='email' required name='email' onChange={changeHandler} placeholder='Enter Email Address' value={formData.email}/>
        </label>

        </div>
        
            {/* createPassword & Confirm Password */}
            <div className='flex gap-x-4 justify-between mt-[20px]'>
            <label className='relative w-full'><p className='text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5'>Create Password<sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword?("text"):("password")} required name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password}/>
            <span onClick={()=> setShowPassword((prev)=>!prev)} className='absolute right-3 cursor-pointer top-[38px]'>
            {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </label>

            <label className='relative w-full'> 
            <p className='text-[0.875rem] mb-1 leading-[1.375rem] text-white'>Confirm Password<sup className='text-pink-200'>*</sup></p>
            <input 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
            type={showConfirmPassword?("text"):("password")} 
            required 
            name='confirmPassword' 
            onChange={changeHandler} 
            placeholder='Confirm Password' 
            value={formData.confirmPassword}/>
            <span className='absolute right-3 cursor-pointer top-[38px]'
            onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
            {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </label>
            </div>
            
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export  default SignupForm;
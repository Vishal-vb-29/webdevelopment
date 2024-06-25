import React, {useState} from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {Link,useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({email:"",password:""})
    const [showPassword,setShowPassword]=useState(false);
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
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing form data");
        console.log(formData);
        navigate("/dashboard");
    }
  return (
    <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>
        <label className='w-full'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5'>Email Address<sup className='text-pink-200'>*</sup></p>
        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='email' required value={formData.email} onChange={changeHandler} placeholder='Enter email address' name='email'></input>
        </label>

        <label className='relative w-full'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem] text-richblack-5'>Password<sup className='text-pink-200'>*</sup></p>
        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword?("text"):("password")} required value={formData.password} onChange={changeHandler} placeholder='Enter Password' name='password'></input>

        <span className='absolute right-3 cursor-pointer top-[38px]' onClick={()=> setShowPassword((prev)=>!prev)}>
            {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>

        <Link to="#"><p className='max-w-max text-xs mt-1 text-blue-100 ml-auto'>Forgot Password</p></Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm;
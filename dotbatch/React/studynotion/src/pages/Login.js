import React from 'react'
import Template from '../components/Template';
import LoginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={LoginImg}
        formtype="Login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login;
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  return (
    <div className='flex w-screen h-screen bg-black flex-col'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>
      }/>
    </Routes>
       
    </div>
  )
}

export default App;

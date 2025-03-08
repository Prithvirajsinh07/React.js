import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './componnents/Home'
import SignIn from './componnents/signIn'
import LogIn from './componnents/logIn'
import "./App.css";

const App = () => {
  return (
    <div>
      <div className='container'>
      <Link to={"/"}>login</Link><br /><br />
      <Link to={"/singIn"}>singIn</Link><br /><br />
      <Link to={"/home"}>home</Link><br /><br />
      </div>
      <Routes>
      
<Route path='/' element={<LogIn/>} />
<Route path='/singIn' element={<SignIn/>} />
<Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
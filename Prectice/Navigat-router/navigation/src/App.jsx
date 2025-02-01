import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../componants/Home'
import About from '../componants/About'
import Contect from '../componants/Contect'


const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contect" element={<Contect/>}/>
   </Routes>
    </>
  )
}

export default App
import React from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/section'
import Footer from '../components/Footer'

const Home = () => {
    let yellow = "red"
  return (
    <>
        <Navbar color={yellow}/>
        <Section/>
        <Footer/>
    </>
  )
}

export default Home
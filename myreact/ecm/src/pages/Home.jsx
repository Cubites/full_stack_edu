import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Best from '../components/Best'

const Home = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <h1 className="shopT-Title">BEST</h1>
      <div className="carousel container">        
        <Best />
      </div>   

    </>
  )
}

export default Home
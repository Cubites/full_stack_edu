import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Best from '../components/Best'
import Outer from '../components/Outer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <h1 className="shopT-Title">BEST</h1>
      <div className="carousel container">        
        <Best />
      </div>
      <Outer />
    </div>
  )
}

export default Home
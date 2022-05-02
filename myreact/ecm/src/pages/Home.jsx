import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/main/Slide'
import Best from '../components/main/Best'
import Outer from '../components/main/Outer'
import Dress from '../components/main/Dress'
import Top from '../components/main/Top'
import Bottom from '../components/main/Bottom'
import Service from '../components/Service'
import Footer from '../components/Footer'

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
      <Dress />
      <Top />
      <Bottom />
      <Service />
      <Footer />
    </div>
  )
}

export default Home
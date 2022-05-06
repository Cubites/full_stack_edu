import React from 'react'
import Slide from '../components/main/Slide'
import Best from '../components/main/Best'
import Outer from '../components/main/Outer'
import Dress from '../components/main/Dress'
import Top from '../components/main/Top'
import Bottom from '../components/main/Bottom'
import Service from '../components/Service'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
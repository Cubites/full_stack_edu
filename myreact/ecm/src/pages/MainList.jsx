import React from 'react'
import Navbar from '../components/Navbar'
import List from '../components/list/List'
import Service from '../components/Service'
import Footer from '../components/Footer'

const MainList = () => {
  return (
    <>
      <Navbar />
      <List />
      <Service />
      <Footer />
    </>
  )
}

export default MainList
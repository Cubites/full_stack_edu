import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import List from './List'
import Write from './Write'
import Read from './Read'
import Logo from '../component/left/Logo'
import LoginForm from '../component/left/LoginForm'
import LogoutForm from '../component/left/LogoutForm'
import Register from './Register'

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="left">
        <Logo />
        {isLoggedIn ? <LogoutForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
      </div>
      <div className="contents">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="write" element={<Write />} />
            <Route path="edit/:id" element={<Write />} />
            <Route path="read/:id" element={<Read />} />
            <Route path="register" element={<Register />} />
          </Routes>
      </div>
    </>
  )
}

export default Layout
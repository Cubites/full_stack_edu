import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './List'
import Write from './Write'
import Read from './Read'
import Logo from '../component/left/Logo'
import LoginForm from '../component/left/LoginForm'
import LogoutForm from '../component/left/LogoutForm'

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="left">
        <Logo />
        {/* 여기에 로그인 폼 작성 <LogoutForm /> */}
      </div>
      <div className="contents">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="write" element={<Write />} />
            <Route path="edit/:id" element={<Write />} />
            <Route path="read/:id" element={<Read />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Layout
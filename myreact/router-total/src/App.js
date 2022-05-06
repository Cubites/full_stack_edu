import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
// BrowserRouter 대신에 HashRouter를 써야하는 경우도 생김 (서버 설정에 따라)
import Content from './pages/Content'
import Aboutme from './pages/Aboutme'
import Work from './pages/Work'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/hong" className={({isActive}) => isActive ? "act" : ""}>Home</NavLink> / 
        <NavLink to="about/kim" className={({isActive}) => isActive ? "act" : ""}>About me</NavLink> / 
        <NavLink to="content/lee" className={({isActive}) => isActive ? "act" : ""}>Content</NavLink> / 
        <NavLink to="work/ahn" className={({isActive}) => isActive ? "act" : ""}>work</NavLink>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:user" element={<Home />} />
        <Route path="content/:user" element={<Content />} />
        <Route path="about/:user" element={<Aboutme />} />
        <Route path="work/:user" element={<Work />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App